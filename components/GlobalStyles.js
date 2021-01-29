import { createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0
    },
    html: {
      '-moz-osx-font-smoothing': 'grayscale',
      '-webkit-font-smoothing': 'antialiased',
      height: '100%',
      width: '100%'
    },
    body: {
      backgroundColor: '#f4f6f8',
      height: '100%',
      width: '100%'
    },
    '#__next': {
      height: '100%',
      width: '100%'
    },
    a: {
      textDecoration: 'none'
    }
  }
}))

export default function GlobalStyles() {
  useStyles()

  return null
}
