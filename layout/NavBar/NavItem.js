import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Button, ListItem, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
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

export default function NavItem({
  href,
  icon: Icon,
  title,
  ...rest
}) {
  const classes = useStyles()

  return (
    <ListItem
      className={clsx(classes.item)}
      disableGutters
      {...rest}
    >
      <Link
        href={href}
        passHref
      >
        <Button
          className={classes.button}
        >
          {Icon && (
            <Icon
              className={classes.icon}
              size="20"
            />
          )}

          <span className={classes.title}>
            {title}
          </span>
        </Button>
      </Link>
    </ListItem>
  )
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired
}
