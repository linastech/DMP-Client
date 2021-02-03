import React, { useState, useEffect } from 'react'
import { makeStyles, Container } from '@material-ui/core'
import { getSession } from 'next-auth/client'
import Page from '@components/Page'
import OrderInfo from './OrderInfo'
import OrderedItems from './OrderedItems'
import OrderHistory from './OrderHistory'
import EditInfo from './EditInfo'


const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    }
  }
})

export default function OrderPage() {
  const classes = useStyles()

  return (
    <Page
      className={classes.root}
      title="Order number 234232"
    >
      <OrderInfo />

      <OrderedItems />

      <EditInfo />

      <OrderHistory />
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
