import { AppBar, Box, Toolbar, Button, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import Logo from '@components/Logo/Index'
import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import { useSession } from 'next-auth/client'
import { LogOut } from 'react-feather'

const useStyles = makeStyles({
  root: {},
  toolbar: {
    height: 64
  },
  logout: {
    color: '#fff'
  }
})

export default function TopBar({ className, ...rest }) {
  const classes = useStyles()
  const [
    session,
    loading
  ] = useSession()

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Link href="/">
          <a><Logo edge="start" /></a>
        </Link>

        <Box flexGrow={1} />

        { typeof window !== 'undefined' && !loading && session &&
          <Link
            href="/api/auth/signout"
            passHref
          >
            <Button className={classes.logout}>
              <LogOut />&nbsp;Logout
            </Button>
          </Link>}
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  className: PropTypes.string
}

TopBar.defaultProps = {
  className: 'topbar'
}
