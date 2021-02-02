import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { 
  Container, makeStyles, Grid, Card, Chip, TableHead, Table, Typography,
  CardHeader, Divider, TableContainer, TableBody, TableRow, TableCell, Button
} from '@material-ui/core'
import ReactCountryFlag from "react-country-flag"
import { ArrowLeftCircle } from 'react-feather'
import { getSession } from 'next-auth/client'
import Page from '@components/Page'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },
    infoCol: {
      fontWeight: 'bold'
    },
    infoRow: {
      backgroundColor: theme.palette.background.dark,
      '&:nth-child(2n)': {
        backgroundColor: theme.palette.background.default
      }
    }
  }
})

const OrderInfoRow = ({ColOne, ColTwo, ColThree, ColFour}) => {
  const classes = useStyles()

  return (
    <TableRow className={classes.infoRow}>
      <TableCell>
        <Grid container justify="space-between">
          <Grid item>{ColOne}</Grid>
          <Grid item className={classes.infoCol}>{ColTwo}</Grid>
        </Grid>
      </TableCell>

      <TableCell>
        <Grid container justify="space-between">
          <Grid item>{ColThree}</Grid>
          <Grid item className={classes.infoCol}>{ColFour}</Grid>
        </Grid>
      </TableCell>
    </TableRow>
  )
}

export default function OrderPage() {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Page
      className={classes.root}
      title="Order number 234232"
    >
      <Container maxWidth={false}>
        <Card>
          <CardHeader
            title={
              <Grid container justify="space-between">
                <Grid item>Order Number: 234-4324-43</Grid>
                <Button 
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<ArrowLeftCircle />}
                  onClick={() => router.back()}
                >
                  Go back
                </Button>
              </Grid>
            }
          />

          <Divider />

          <TableContainer>
            <Table className={classes.table} aria-label="Order Info">
              <TableHead>
                <TableRow>
                  <TableCell>Order Information</TableCell>

                  <TableCell>Customer Information</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <OrderInfoRow
                  ColOne="Order Number"
                  ColTwo="234-4324-43"
                  ColThree="Name and adress"
                  ColFour="Not specified"
                />

                <OrderInfoRow
                  ColOne="Order date"
                  ColTwo="2021-01-05 09:00:28"
                  ColThree="Phone"
                  ColFour="Not specified"
                />


                <OrderInfoRow
                  ColOne="Market"
                  ColTwo={
                    <span>
                      <ReactCountryFlag countryCode="LT" svg />
                      &nbsp;Lithuania
                    </span>
                  }
                  ColThree="City"
                  ColFour="Kaunas"
                />


                <OrderInfoRow
                  ColOne="Ship By"
                  ColTwo="2021-01-19 09:00:28"
                  ColThree="Post Code"
                  ColFour="LV 3284"
                />

                <OrderInfoRow
                  ColOne="DMP Status"
                  ColTwo={
                    <Chip
                      style={{backgroundColor:'#42e642', color: '#fff'}}
                      label="New"
                      size="small"
                    />
                  }
                  ColThree="Country Code"
                  ColFour="LTU"
                />

                <OrderInfoRow
                  ColOne="Amazon Status"
                  ColTwo={
                    <Chip
                      style={{backgroundColor:'#4247e6', color: '#fff'}}
                      label="Unshipped"
                      size="small"
                    />
                  }
                  ColThree="PVM Code"
                  ColFour="DE113851928"
                />
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
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
