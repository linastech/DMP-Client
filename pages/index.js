
import PropTypes from 'prop-types'
import { getSession } from 'next-auth/client'

export default function Dashboard({ user }) {
  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome {user.email}</p>
    </div>
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

Dashboard.propTypes = {
  user: PropTypes.object
}

Dashboard.defaultProps = {
  user: null
}
