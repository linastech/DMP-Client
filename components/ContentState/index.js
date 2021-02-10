import { Box, Typography, CircularProgress } from '@material-ui/core'

export const ErrorMessage = ({message}) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    height="100%"
    justifyContent="center"
  >
    <Typography variant="h5">
      {message}
    </Typography>
  </Box> 
)

export const LoadingIndicator = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    height="100%"
    justifyContent="center"
  >
    <CircularProgress />
  </Box> 
)
