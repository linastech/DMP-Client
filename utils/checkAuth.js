import { getSession } from 'next-auth/client'

export default function checkAuth(){
  return async (ctx) => {
    const session = await getSession(ctx)

    if (!session && ctx.resolvedUrl !== '/auth/login') {
      ctx.res.writeHead(302, { Location: '/auth/login' })
      ctx.res.end()

      return {
        props: {
          user: false
        }
      }
    }

    if(session && ctx.resolvedUrl === '/auth/login'){
      ctx.res.writeHead(302, { Location: '/' })
      ctx.res.end()

      return {
        props: {
          user: session.user
        }
      }
    }

    return {
      props: {
        user: false
      }
    }
  }
}

export const getServerSideProps = checkAuth()
