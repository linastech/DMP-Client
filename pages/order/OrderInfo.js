import React from 'react'
import { useRouter } from 'next/router'
import { 
  Container, makeStyles, Grid, Card, Chip,
  CardHeader, Divider, Button, Typography
} from '@material-ui/core'
import ReactCountryFlag from "react-country-flag"
import { ArrowLeftCircle } from 'react-feather'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      paddingBottom: theme.spacing(3),
    },
    container: {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    column: {
      '& > div': {
        padding: theme.spacing(2),
        borderRight: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        '&:nth-child(2n)': {
          backgroundColor: theme.palette.background.dark
        }
      }
    },
    chip: {
      height: '19px',
    },
    infoCell: {
      borderRight: `1px solid ${theme.palette.divider}`
    },
    infoCol: {
      fontWeight: 'bold'
    }
  }
})

export default function OrderInfo() {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Container className={classes.root} maxWidth={false}>
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


        <Grid container className={classes.container}>
          <Grid item xs={12} md={6} className={classes.column}>
            <Grid item>
              <Typography variant="h6" className={classes.header}>Order information</Typography>
            </Grid>

            <Grid container justify="space-between">
              <Grid item>Order Number</Grid>
              <Grid item className={classes.infoCol}>234-4324-43</Grid>
            </Grid>

            <Grid container justify="space-between">
              <Grid item>Order date</Grid>
              <Grid item className={classes.infoCol}>2021-01-05 09:00:28</Grid>
            </Grid>

            <Grid container justify="space-between">
              <Grid item>Market</Grid>
              <Grid item className={classes.infoCol}>
                <span>
                  <ReactCountryFlag countryCode="LT" svg />
                  &nbsp;Lithuania
                </span>
              </Grid>
            </Grid>

            <Grid container justify="space-between">
              <Grid item>Ship By</Grid>
              <Grid item className={classes.infoCol}>2021-01-19 09:00:28</Grid>
            </Grid>

            <Grid container justify="space-between">
              <Grid item>DMP Status</Grid>
              <Grid item className={classes.infoCol}>
                <Chip
                  style={{backgroundColor:'#42e642', color: '#fff'}}
                  label="New"
                  size="small"
                  className={classes.chip}
                />
              </Grid>
            </Grid>

            <Grid container justify="space-between">
              <Grid item>Amazon Status</Grid>
              <Grid item className={classes.infoCol}>
                <Chip
                  style={{backgroundColor:'#4247e6', color: '#fff'}}
                  label="Unshipped"
                  size="small"
                  className={classes.chip}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} className={classes.column}>
            <Grid item>
              <Typography variant="h6" className={classes.header}>Customer information</Typography>
            </Grid>

            <Grid container justify="space-between">
              <Grid item>Name and adres</Grid>
              <Grid item className={classes.infoCol}>Not specified</Grid>
            </Grid>

            <Grid container justify="space-between">
              <Grid item>Phone</Grid>
              <Grid item className={classes.infoCol}>Not specified</Grid>
            </Grid>

            <Grid container justify="space-between">
              <Grid item>City</Grid>
              <Grid item className={classes.infoCol}>Kaunas</Grid>
            </Grid>

            <Grid container justify="space-between">
              <Grid item>Post Code</Grid>
              <Grid item className={classes.infoCol}>LV 3284</Grid>
            </Grid>

            <Grid container justify="space-between">
              <Grid item>Country Code</Grid>
              <Grid item className={classes.infoCol}>LTU</Grid>
            </Grid>

            <Grid container justify="space-between">
              <Grid item>PVM Code</Grid>
              <Grid item className={classes.infoCol}>DE113851928</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}
