import { AppBar, Box, Toolbar, Button, makeStyles, Hidden, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
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

export default function TopBar({ className, onMobileNavOpen, ...rest }) {
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
          <Hidden mdDown>
            <Link
              href="/api/auth/signout"
              passHref
            >
              <Button className={classes.logout}>
                <LogOut />&nbsp;Logout
              </Button>
            </Link>
          </Hidden>
        }

          <Hidden lgUp>
            <IconButton
              color="inherit"
              onClick={onMobileNavOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
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
