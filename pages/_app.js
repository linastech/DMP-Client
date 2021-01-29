import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyles from '@components/GlobalStyles'
import Layout from '../layout'
import PropTypes from 'prop-types'
import { Provider } from 'next-auth/client'
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'
export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

        <CssBaseline />

        <GlobalStyles />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
