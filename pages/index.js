import { Container, Grid, makeStyles } from '@material-ui/core'
import Page from '@components/Page/index'
import checkAuth from '@utils/checkAuth'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

export default function Home() {
  const classes = useStyles()

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          Home
        </Grid>
      </Container>
    </Page>
  )
}

export const getServerSideProps = checkAuth()
