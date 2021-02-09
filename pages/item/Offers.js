import React, { useState } from 'react'
import clsx from 'clsx'
import moment from 'moment'
import {
  Container, Card, Chip, CardHeader, makeStyles, Divider, Box,
  Table, TableHead, TableRow, TableCell, TableBody, TablePagination
} from '@material-ui/core'
import PerfectScrollbar from 'react-perfect-scrollbar'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3)
  },
  tableRow: {
    '& th, & td': {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    '& th:last-child': {
      borderRight: '0 !important'
    }
  },
  header: {
    backgroundColor: theme.palette.background.dark
  }
}))

const suppliers = [
  {
    id: 0,
    name: 'AB.pl',
    price: 65,
    amount: 5,
    delivery_info: '2-4 d. d.',
    last_updated: 1619412824673,
    offer_vaild_until: 1619412824673,
  },
  {
    id: 0,
    name: 'Action',
    price: 87,
    amount: 3,
    delivery_info: '',
    last_updated: 1619412824673,
    offer_vaild_until: 1619412824673,
  },
  {
    id: 0,
    name: 'AB.pl',
    price: 32,
    amount: 2,
    delivery_info: '2-4 d. d.',
    last_updated: 1619412824673,
    offer_vaild_until: 1619412824673,
  },
]

export default function Information(){
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
    <Container className={classes.root} maxWidth={false}>
      <Card className={classes.root}>
        <CardHeader title="Active offers by suppliers" />

        <Divider />

        <PerfectScrollbar>
          <Box minWidth={1050}>
            <Table>
              <TableHead>
                <TableRow className={clsx(classes.tableRow, classes.header)}>
                  <TableCell>
                    Supplier
                  </TableCell>

                  <TableCell>
                    Price
                  </TableCell>

                  <TableCell>
                    Amount
                  </TableCell>

                  <TableCell>
                    Delivery information
                  </TableCell>

                  <TableCell>
                    Last updated
                  </TableCell>

                  <TableCell>
                    Offer valid until
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {suppliers.slice(0, limit).map((supplier) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={supplier.id}
                  >
                    <TableCell>
                      { supplier.name }
                    </TableCell>

                    <TableCell>
                      { supplier.price } EUR (no PVM)
                    </TableCell>

                    <TableCell>
                      <Chip
                        style={{backgroundColor:'#42e642', color: '#fff'}}
                        label={ supplier.amount }
                        size="small"
                      />
                    </TableCell>

                    <TableCell>
                      { supplier.delivery_info }
                    </TableCell>

                    <TableCell>
                      {moment(supplier.last_updated).format('DD/MM/YYYY')}
                    </TableCell>

                    <TableCell>
                      {moment(supplier.offer_vaild_until).format('DD/MM/YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>

        <TablePagination
          component="div"
          count={suppliers.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </Container>
  )
}
