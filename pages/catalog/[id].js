import { Container, makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import Page from '@components/Page'
import CatalogList from './CatalogList'
import Filters from './Filters'
import checkAuth from '@utils/checkAuth'
import { ArrowLeftCircle } from 'react-feather'
import { Grid, Button, Card, CardHeader, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
}))

export default function Catalog() {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Page
      className={classes.root}
      title="Catalog"
    >
      <Container className={classes.root} maxWidth={false}>
        <Card className={classes.root}>
          <CardHeader 
            title={
              <Grid container justify="space-between">
              <Grid item>Catalog</Grid>
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

          <Filters />

          <Divider />

          <CatalogList />
        </Card>
      </Container>
    </Page>
  )
}

export const getServerSideProps = checkAuth()
