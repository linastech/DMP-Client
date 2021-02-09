import React, { useEffect } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import NavItem from './NavItem'
import {
  Avatar, ListItem, Box, Divider, Drawer, Hidden, List, 
  Typography, Button, makeStyles, Icon, Collapse, ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { StarBorder, ExpandMore, ExpandLess, Description, EventNote } from '@material-ui/icons'
import { Home, Truck, ShoppingBag } from 'react-feather'

const useStyles = makeStyles((theme) => ({
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
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}))

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Test'
}

export default function NavBar({ onMobileClose, openMobile }) {
  const classes = useStyles()
  const router = useRouter()
  const [open, setOpen] = React.useState(true)

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
  }, [router.pathname])

  const handleClick = () => {
    setOpen(!open)
  }

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
          <ListItem
            className={clsx(classes.item)}
            disableGutters
          >
            <Link href='/' passHref>
              <Button className={classes.button}>
                <Home className={classes.icon} size="20" />

                <span className={classes.title}>Home</span>
              </Button>
            </Link>
          </ListItem>

          <ListItem
            className={clsx(classes.item)}
            disableGutters
          >
            <Link href='/suppliers' passHref>
              <Button className={classes.button}>
                <Truck className={classes.icon} size="20" />

                <span className={classes.title}>Suppliers</span>
              </Button>
            </Link>
          </ListItem>

          <ListItem
            className={clsx(classes.item)}
            disableGutters
            button onClick={handleClick}
          >
            <Button className={classes.button}>
              <ShoppingBag className={classes.icon} size="20" />

              <span className={classes.title}>Amazon</span>
              {open ? <ExpandLess /> : <ExpandMore />}
            </Button>
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href='/amazon' passHref>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <EventNote />
                  </ListItemIcon>

                  <ListItemText primary="Orders" />
                </ListItem>
              </Link>

              <Link href='/invoices' passHref>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Description />
                  </ListItemIcon>

                  <ListItemText primary="Invoices" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
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
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};
