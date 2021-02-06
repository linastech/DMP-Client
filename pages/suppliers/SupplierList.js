import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Search as SearchIcon, CheckCircle, MinusCircle } from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { 
  Box, makeStyles, Grid, Card, TableHead, Table, Typography, TablePagination, SvgIcon,
  CardHeader, Divider, TableBody, TableRow, TableCell, Button, TextField, InputAdornment
} from '@material-ui/core'

const items = [
  {
    supplier: 'AB.pl',
    status: 'DISABLED',
    delivery_period: 3,
    minimal_items_cost: 10,
    margin: 0
  },
  {
    supplier: 'ABC',
    status: 'ACTIVE',
    delivery_period: 3,
    minimal_items_cost: 10,
    margin: 0
  },
  {
    supplier: 'ABESTOCK',
    status: 'DISABLED',
    delivery_period: 3,
    minimal_items_cost: 10,
    margin: 0
  },
  {
    supplier: 'ACC',
    status: 'ACTIVE',
    delivery_period: 3,
    minimal_items_cost: 10,
    margin: 0
  },
]

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
  },
  catalogCol: {
    width: '150px'
  },
  statusChecked: {
    color: 'green',
  },
  statusUnchecked: {
    color: 'red'
  }
}))

export default function SuppliersList() {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const classes = useStyles()

  
  const handleLimitChange = (event) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Grid container justify="space-between">
            <Grid item>Suppliers</Grid>

            <Grid item>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        color="action"
                        fontSize="small"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                size="small"
                fullWidth
                placeholder="Search order"
                variant="outlined"
              />
            </Grid>
          </Grid>
        }
      />

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
                  Status
                </TableCell>

                <TableCell>
                  Delivery period
                </TableCell>

                <TableCell>
                  Minimal cost of items
                </TableCell>

                <TableCell>
                  Margin
                </TableCell>

                <TableCell className={classes.catalogCol}>
                  &nbsp;
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {items.slice(0, limit).map((item) => (
                <TableRow
                  className={classes.tableRow}
                  hover
                  key={item.id}
                >
                  <TableCell>
                    {item.supplier}
                  </TableCell>

                  <TableCell align="center">
                    {item.status === 'ACTIVE' && 
                      <CheckCircle className={classes.statusChecked} />
                    }
                    {item.status === 'DISABLED' && 
                      <MinusCircle className={classes.statusUnchecked} />
                    }
                  </TableCell>

                  <TableCell>
                    {item.delivery_period} d.
                  </TableCell>

                  <TableCell>
                    {item.minimal_items_cost} &euro;
                  </TableCell>

                  <TableCell>
                    {item.margin} %
                  </TableCell>

                  <TableCell align="center">
                    <Link href="" passHref>
                      <Button 
                        variant="contained"
                        color="primary"
                        size="small"
                      >
                        Catalog
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

      <TablePagination
        component="div"
        count={items.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  )
}
