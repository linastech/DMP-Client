import { Grid, makeStyles, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  }
}))

export default function Stats() {
  const classes = useStyles()

  return (
    <Box
      className={classes.root}
      textAlign="center"
    >
      <Grid
        container
      >
        <Grid
          item
          md={3}
          xs={12}
        >
          <Typography variant="h3">10</Typography>

          <Typography color="textSecondary">total unshipped orders</Typography>
        </Grid>

        <Grid
          item
          md={3}
          xs={12}
        >
          <Typography variant="h3">8</Typography>

          <Typography color="textSecondary">total unconfirmed orders</Typography>
        </Grid>

        <Grid
          item
          md={3}
          xs={12}
        >
          <Typography variant="h3">31</Typography>

          <Typography color="textSecondary">total cancelled orders</Typography>
        </Grid>

        <Grid
          item
          md={3}
          xs={12}
        >
          <Typography variant="h3">23</Typography>

          <Typography color="textSecondary">total shipped orders</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
