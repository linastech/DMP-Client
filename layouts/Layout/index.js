import React, {useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import PropTypes from 'prop-types'
import TopBar from '@components/TopBar'
import { makeStyles, Box, CircularProgress } from '@material-ui/core'

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
    paddingTop: 64
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
  const router = useRouter()
  const [session, loading] = useSession()
  const [
    isMobileNavOpen,
    setMobileNavOpen
  ] = useState(false)

  return (
    <div className={classes.root}>
      <TopBar menu={false} />

      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {loading &&
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                height="100%"
                justifyContent="center"
              >
                <CircularProgress />
              </Box>
            }

            {!loading &&
              children
            }
          </div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
