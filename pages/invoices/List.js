import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import moment from 'moment'
import { 
  Box, Chip, Table, TableBody, TableCell, TableContainer,
  TableHead, TablePagination, TableRow, makeStyles, Container
} from '@material-ui/core'

const invoices = [
  {
    id: 0,
    order_number: '305-3213-3213123',
    item: 'Amazfit BIP U Smartwatch pink',
    ims_status: 'SENT',
    shipped_date: 1619412824673,
    supplier: 'ALSO',
    bill: 'issued',
    bill_number: '0001407',
    bill_issue_date: 1649412824673,
  },
  {
    id: 0,
    order_number: '305-3213-3213123',
    item: 'Amazfit BIP U Smartwatch pink',
    ims_status: 'SENT',
    shipped_date: 1619412824673,
    supplier: 'ALSO',
    bill: 'issued',
    bill_number: '0001407',
    bill_issue_date: 1649412824673,
  },
  {
    id: 0,
    order_number: '305-3213-3213123',
    item: 'Amazfit BIP U Smartwatch pink',
    ims_status: 'SENT',
    shipped_date: 1619412824673,
    supplier: 'ALSO',
    bill: 'issued',
    bill_number: '0001407',
    bill_issue_date: 1649412824673,
  },
]

const useStyles = makeStyles((theme) => ({
  root: {},
  head: {
    background: theme.palette.background.dark,
    borderTop: `1px solid ${theme.palette.border}`,
    '& th': {
      borderRight: `1px solid ${theme.palette.border}`
    }
  },
  body: {
    '& td': {
      borderRight: `1px solid ${theme.palette.border}`
    }
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
    <>
      <TableContainer>
        <Table>
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell>
                Order number
              </TableCell>

              <TableCell>
                Item
              </TableCell>

              <TableCell>
                IMS Status
              </TableCell>

              <TableCell>
                Shipped date
              </TableCell>

              <TableCell>
                Supplier
              </TableCell>

              <TableCell>
                Bill
              </TableCell>

              <TableCell>
                Bill number
              </TableCell>

              <TableCell>
                Date bill issued
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody className={classes.body}>
            {invoices.slice(0, limit).map((invoice) => (
              <TableRow>
                <TableCell>
                  <Link href={`/order/${invoice.id}`}>
                    <a>{ invoice.order_number }</a>
                  </Link>
                </TableCell>

                <TableCell>
                  { invoice.item }
                </TableCell>

                <TableCell>
                  <Chip
                    style={{backgroundColor:'#42e642', color: '#fff'}}
                    label={ invoice.ims_status }
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  {moment(invoice.shipped_date).format('DD/MM/YYYY')}
                </TableCell>

                <TableCell>
                  { invoice.supplier }
                </TableCell>

                <TableCell>
                  <Chip
                    style={{backgroundColor:'#42e642', color: '#fff'}}
                    label={ invoice.bill }
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  { invoice.bill_number }
                </TableCell>

                <TableCell>
                  {moment(invoice.bill_issue_date).format('DD/MM/YYYY')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={orders.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </>
  )
}

Results.propTypes = {
  orders: PropTypes.array.isRequired
}

Results.defaultProps = {
  orders: []
}
