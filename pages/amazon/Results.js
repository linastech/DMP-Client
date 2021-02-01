import React, { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import moment from 'moment'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Box, Card, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}))

export default function Results({ orders, ...rest }) {
  const classes = useStyles()
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)

  const handleLimitChange = (event) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <Card
      className={classes.root}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Date
                </TableCell>

                <TableCell>
                  Order Number
                </TableCell>

                <TableCell>
                  Market
                </TableCell>

                <TableCell>
                  Item
                </TableCell>

                <TableCell>
                  Amazon Status
                </TableCell>

                <TableCell>
                  DMP Status
                </TableCell>

                <TableCell>
                  Supplier
                </TableCell>

                <TableCell>
                  Ship By
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {orders.slice(0, limit).map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {moment(order.date).format('DD/MM/YYYY')}
                  </TableCell>

                  <TableCell>
                    <Link href="/orderd/1">
                      {order.orderNumber}
                    </Link>
                  </TableCell>

                  <TableCell>
                    {order.market}
                  </TableCell>

                  <TableCell>
                    {order.item}
                  </TableCell>

                  <TableCell>
                    {order.amazonStatus}
                  </TableCell>

                  <TableCell>
                    {order.dmpStatus}
                  </TableCell>

                  <TableCell>
                    {order.supplier}
                  </TableCell>

                  <TableCell>
                    {moment(order.shipBy).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

      <TablePagination
        component="div"
        count={orders.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  )
}

Results.propTypes = {
  orders: PropTypes.array.isRequired
}


