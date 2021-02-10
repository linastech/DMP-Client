import React from 'react'
import { 
  Container, makeStyles, Grid, Card, Chip, TableHead, Table, Typography,
  CardHeader, Divider, TableContainer, TableBody, TableRow, TableCell, Button
} from '@material-ui/core'
import moment from 'moment'


const useStyles = makeStyles((theme) => {
  return {
    root: {},
    table: {
      '& td': {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
      '& th': {
        borderRight: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.dark
      }
    }
  }
})

const history = [
  {
    id: '0',
    date: 1555016400000,
    content: 'Order information received from Amazon'
  },
  {
    id: '1',
    date: 1556016400000,
    content: 'Order information updated'
  },
  {
    id: '2',
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
                <TableRow key={record.id} className={classes.row}>
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
