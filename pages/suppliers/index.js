import { Container, Grid, makeStyles } from '@material-ui/core'
import Page from '@components/Page'
import checkAuth from '@utils/checkAuth'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

export default function Suppliers({ user }) {
  const classes = useStyles()

  return (
    <Page
      className={classes.root}
      title="Suppliers"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          Suppliers
        </Grid>
      </Container>
    </Page>
  )
}

export const getServerSideProps = checkAuth()
