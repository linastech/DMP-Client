import PropTypes from 'prop-types'
import React, { useState } from 'react'
import NavBar from '@components/NavBar'
import TopBar from '@components/TopBar'
import { makeStyles } from '@material-ui/core'
import { useSession } from 'next-auth/client'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}))

export default function Layout({ children }) {
  const classes = useStyles()
  const [
    session,
    loading
  ] = useSession()
  const [
    isMobileNavOpen,
    setMobileNavOpen
  ] = useState(false)

  return (
    <div className={classes.root}>
      <TopBar />

      { typeof window !== 'undefined' && !loading && session &&
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />}

      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
