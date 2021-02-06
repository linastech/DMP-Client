import React from 'react'
import GlobalStyles from '@components/GlobalStyles'
import {Provider } from 'next-auth/client'
import DashboardLayout from '@layouts/Dashboard'
import PropTypes from 'prop-types'
import theme from '@theme'
import {CssBaseline, ThemeProvider } from '@material-ui/core'
export default function DMPApp({ Component, pageProps }) {
  const Layout = Component.Layout || DashboardLayout

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

DMPApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
