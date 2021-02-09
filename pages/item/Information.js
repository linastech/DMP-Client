import { useRouter } from 'next/router'
import clsx from 'clsx'
import { ArrowLeftCircle } from 'react-feather'
import { CardHeader, Grid, makeStyles, Button, Divider } from '@material-ui/core'

const item = {
  id: 0,
  name: 'Amazfit BIP U Smartwatch pink',
  ean: '4064307171531',
  offer_ean: '4064307171531',
  asin: 'B0BDASDDSAVQ',
  manufacturer_code: '1457423',
  manufacturer: '',
  description: '• Prozessor: 3,6 GHz Quad-Core Intel Core i3 Prozessor • Arbeitsspeicher: 8 GB DDR 4 - 2400 RAM • Speicher: 256 GB SSD • Grafik: Radeon Pro 555X mit 2 GB GDDR5 Grafikspeicher • Display: 21,5 Zoll (54,61 cm) Retina 4K Display mit 4.096 x 2.304 Pixe|'
}

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.background.dark
  },
  row: {
    padding: theme.spacing(2)
  },
  leftCol: {
    borderRight: `1px solid ${theme.palette.border}`
  },
  fieldValue: {
    fontWeight: 'bold'
  }
}))

export default function Information(){
  const classes = useStyles()
  const router = useRouter()

  return (
    <>
      <CardHeader 
        title={
          <Grid container justify="space-between">
          <Grid item>{item.name}</Grid>
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

      <Grid
        container
        md={12}
        xs={12}
      >
        {/* Left Col */}
        <Grid
          container
          justify="space-between"
          md={6}
          xs={12}
          className={classes.leftCol}
        >
          {/* Name */}
          <Grid
            container
            md={12}
            xs={12}
            justify="space-between"
            className={clsx(classes.row, classes.background)}
          >
            <Grid item>Name</Grid>
            <Grid item className={classes.fieldValue}>{item.name}</Grid>
          </Grid>

          {/* Ean */}
          <Grid
            container
            md={12}
            xs={12}
            justify="space-between"
            className={classes.row}
          >
            <Grid item>Barcode (EAN)</Grid>
            <Grid item className={classes.fieldValue}>{item.ean}</Grid>
          </Grid>


          {/* ASIN */}
          <Grid
            container
            md={12}
            xs={12}
            justify="space-between"
            className={clsx(classes.row, classes.background)}
          >
            <Grid item>Asin (Amazon)</Grid>
            <Grid item className={classes.fieldValue}>{item.asin}</Grid>
          </Grid>

          {/* Manufacturer code */}
          <Grid
            container
            md={12}
            xs={12}
            justify="space-between"
            className={classes.row}
          >
            <Grid item>Manufacturer code</Grid>
            <Grid item className={classes.fieldValue}>{item.manufacturer_code}</Grid>
          </Grid>

          {/* Manufacturer */}
          <Grid
            container
            md={12}
            xs={12}
            justify="space-between"
            className={clsx(classes.row, classes.background)}
          >
            <Grid item>Manufacturer</Grid>
            <Grid item className={classes.fieldValue}>{item.manufacturer}</Grid>
          </Grid>
        </Grid>

        {/* Right col */}
        <Grid
          container
          justify="space-between"
          md={6}
          xs={12}
          className={classes.row}
        >
          <Grid item>Description: </Grid>
          <Grid item className={classes.fieldValue}>{item.description}</Grid>
        </Grid>
      </Grid>
    </>
  )
}
