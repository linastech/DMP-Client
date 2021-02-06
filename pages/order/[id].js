import React from 'react'
import { makeStyles } from '@material-ui/core'
import Page from '@components/Page'
import OrderInfo from './OrderInfo'
import OrderedItems from './OrderedItems'
import OrderHistory from './OrderHistory'
import EditInfo from './EditInfo'
import checkAuth from '@utils/checkAuth'


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

export const getServerSideProps = checkAuth()
