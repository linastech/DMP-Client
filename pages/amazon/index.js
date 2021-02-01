import React, { useState, useEffect } from 'react'
import { Container, makeStyles, Box, Typography } from '@material-ui/core'
import { getSession } from 'next-auth/client'
import Page from '@components/Page'
import Results from './Results'
import Toolbar from './Toolbar'
import Stats from './Stats'
import useFetch from 'use-http'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

export default function AmazonOrders() {
  const classes = useStyles()
  const [orders, setTodos] = useState([])

  const { get, response, loading, error } = useFetch(process.env.NEXT_PUBLIC_API_URL)

  async function initializeTodos() {
    const initialTodos = await get('/orders/amazon')

    if (response.ok) {
      setTodos(initialTodos)
    }
  }

  useEffect(() => { initializeTodos() }, [])

  // TODO Indicators
  if (error) {
    return ('Error!')
  }

  if (loading) {
    return ('Loading...')
  }

  return (
    <Page
      className={classes.root}
      title="Amazon Orders"
    >
      <Container maxWidth={false}>
        <Box>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            Amazon Orders
          </Typography>
        </Box>

        <Stats />

        <Toolbar />

        <Box mt={3}>
          <Results orders={orders} />
        </Box>
      </Container>
    </Page>
  )
}

// eslint-disable-next-line func-style
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)

  if (!session) {
    ctx.res.writeHead(302, { Location: '/auth/login' })
    ctx.res.end()

    return { props: {} }
  }

  return {
    props: {
      user: session.user
    }
  }
}
AmazonOrders.defaultProps = {
  user: null
}
