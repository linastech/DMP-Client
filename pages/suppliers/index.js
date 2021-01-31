import PropTypes from 'prop-types'
import { Container, Grid, makeStyles } from '@material-ui/core'
import { getSession } from 'next-auth/client'
import Page from '@components/Page'

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

Suppliers.propTypes = {
  user: PropTypes.object
}

Suppliers.defaultProps = {
  user: null
}
