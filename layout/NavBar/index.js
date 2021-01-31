import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import NavItem from './NavItem'
import { Avatar, Box, Divider, Drawer, Hidden, List, Typography, makeStyles } from '@material-ui/core'
import { Home, Truck, ShoppingBag } from 'react-feather'

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    width: 64,
    height: 64
  }
}))

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Test'
}

const items = [
  {
    href: '/',
    icon: Home,
    title: 'Home'
  },
  {
    href: '/amazon',
    icon: ShoppingBag,
    title: 'Amazon'
  },
  {
    href: '/suppliers',
    icon: Truck,
    title: 'Suppliers'
  }
]

export default function NavBar({ onMobileClose, openMobile }) {
  const classes = useStyles()
  const router = useRouter()

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }

  }, [router.pathname])

  const content = (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          src={user.avatar}
        />

        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>

        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>

      <Divider />

      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              icon={item.icon}
              key={item.title}
              title={item.title}
            />
          ))}
        </List>
      </Box>

      <Box flexGrow={1} />
    </Box>
  )

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>

      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  )
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
}

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
}
