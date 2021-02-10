import Page from '@components/Page'
import checkAuth from '@utils/checkAuth'
import { Card, Container, makeStyles } from '@material-ui/core'
import Information from './Information'
import Offers from './Offers'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3)
  }
}))

const item = {
  id: 0,
  name: 'Amazfit BIP U Smartwatch pink',
}

export default function Item() {
  const classes = useStyles()

  return (
    <Page
      className={classes.root}
      title="Catalog"
    >
      <Container className={classes.root} maxWidth={false}>
        <Card className={classes.root}>
          <Information />
        </Card>
      </Container>

      <Offers />
    </Page>
  )
}

export const getServerSideProps = checkAuth()
