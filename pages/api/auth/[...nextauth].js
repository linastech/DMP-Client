/* eslint-disable new-cap */
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  site: process.env.NEXTAUTH_URL,
  session: {
    jwt: true,
    // 30 days
    maxAge: 30 * 24 * 60 * 60
  },
  pages: {
    signIn: '/auth/login'
  },
  providers: [
    Providers.Credentials({
      authorize: (credentials) => {
        // Add logic here to look up the user from the credentials supplied
        const user = {
          password: 'test',
          email: 'test@test.com'
        }

        if (user.email === credentials.email && user.password === credentials.password) {
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user)
        }
        // If you return null or false then the credentials will be rejected

        return Promise.resolve(null)

        /*
         * You can also Reject this callback with an Error or with a URL:
         * return Promise.reject(new Error('error message')) // Redirect to error page
         * return Promise.reject('/path/to/redirect')        // Redirect to a URL
         */
      }
    })
  ]
}

export default (req, res) => NextAuth(req, res, options)
