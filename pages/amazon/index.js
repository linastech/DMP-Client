import React, { useState, useEffect } from 'react'
import { Container, makeStyles, Box, Typography, CircularProgress } from '@material-ui/core'
import Page from '@components/Page'
import Results from './Results'
import Toolbar from './Toolbar'
import Stats from './Stats'
import useFetch from 'use-http'
import checkAuth from '@utils/checkAuth'
import { ErrorMessage, LoadingIndicator } from '@components/ContentState'

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

  async function initializeOrders() {
    const initialTodos = await get('/orders/amazon')

    if (response.ok) {
      setTodos(initialTodos)
    }
  }

  useEffect(() => { initializeOrders() }, [])

  if (error)
    return  <ErrorMessage message="Order list failed to load" />

  if (loading)
    return  <LoadingIndicator />

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
        
        <Results orders={orders} />
      </Container>
    </Page>
  )
}

export const getServerSideProps = checkAuth()
