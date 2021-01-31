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

export default function AmazonOrders({ user }) {
  const classes = useStyles()

  return (
    <Page
      className={classes.root}
      title="Amazon Orders"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          Amazon Orders
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

AmazonOrders.propTypes = {
  user: PropTypes.object
}

AmazonOrders.defaultProps = {
  user: null
}
