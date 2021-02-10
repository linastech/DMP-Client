import React, { useState, useEffect } from 'react'
import { Card, Divider, CardHeader, CardContent, Container, makeStyles, Box, Typography } from '@material-ui/core'
import Page from '@components/Page'
import checkAuth from '@utils/checkAuth'
import Information from './Information'
import List from './List'

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

  return (
    <Page
      className={classes.root}
      title="Amazon order invoices"
    >
      <Container maxWidth={false}>
        <Card>
          <CardHeader
            title="Amazon orders invoice"
          />

          <Divider />

            <Information />

            <List />
        </Card>
      </Container>
    </Page>
  )
}

export const getServerSideProps = checkAuth()
