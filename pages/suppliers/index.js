import { Container, makeStyles } from '@material-ui/core'
import Page from '@components/Page'
import AddSupplier from './AddSupplier'
import SuppliersList from './SupplierList'
import checkAuth from '@utils/checkAuth'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    marginTop: theme.spacing(3)
  }
}))

export default function Suppliers({ user }) {
  const classes = useStyles()

  return (
    <Page
      className={classes.root}
      title="Suppliers"
    >
     <Container className={classes.root} maxWidth={false}>
        <AddSupplier />

        <SuppliersList />
      </Container>
    </Page>
  )
}

export const getServerSideProps = checkAuth()
