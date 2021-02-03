import React from 'react'
import { 
  Container, makeStyles, Grid, Card, Chip, TableHead, Table, Typography,
  CardHeader, Divider, TableContainer, TableBody, TableRow, TableCell, Button
} from '@material-ui/core'
import moment from 'moment'


const useStyles = makeStyles((theme) => {
  return {
    root: {},
    cell: {
      borderRight: `1px solid ${theme.palette.divider}`
    },
    row: {
      backgroundColor: '#f8fbff',
      '&:nth-child(2n)': {
        backgroundColor: theme.palette.background.default
      }
    }
  }
})

const history = [
  {
    date: 1555016400000,
    content: 'Order information received from Amazon'
  },
  {
    date: 1556016400000,
    content: 'Order information updated'
  },
  {
    date: 1555716400000,
    content: 'Order information updated'
  },
]

export default function OrderHistory() {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth={false}>
      <Card>
        <CardHeader
          title={
            <Grid container justify="space-between">
              <Grid item>Order history</Grid>
            </Grid>
          }
        />

        <Divider />

        <TableContainer>
          <Table 
            className={classes.table}
            aria-label="Order Info"
          >
            <TableHead>
              <TableRow>
                <TableCell>Order Information</TableCell>

                <TableCell>Customer Information</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {history.map((record) => (
                <TableRow className={classes.row}>
                  <TableCell className={classes.cell}>
                    {moment(record.date).format('DD/MM/YYYY')}
                  </TableCell>

                  <TableCell>
                    {record.content}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  )
}
