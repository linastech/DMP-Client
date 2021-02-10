import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Container, makeStyles, Grid, Card, TextField,  InputAdornment, SvgIcon, Box, Chip, TableHead, Table, Typography,
  CardHeader, Divider, TableContainer, TableBody, TableRow, TableCell, Button, TablePagination
} from '@material-ui/core'
import { Search as SearchIcon } from 'react-feather'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginBottom: theme.spacing(3)
    },
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

const items = [
  {
    name: 'Demo name',
    ean: '23132312312312',
    sku: '3123132131',
    supplier: 'valre.lt',
    amount: 1
  },
  {
    name: 'Demo name 2',
    ean: '23131231212312',
    sku: '3123132131',
    supplier: 'valre.lt',
    amount: 1
  },
  {
    name: 'Demo name 3',
    ean: '232211312312312',
    sku: '3123132131',
    supplier: 'valre.lt',
    amount: 1
  },
  {
    name: 'Demo name 4',
    ean: '231323123412312',
    sku: '3123132131',
    supplier: 'valre.lt',
    amount: 1
  },
]

export default function OrderedItems() {
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
      <Card>
        <CardHeader
          title={
            <Grid container justify="space-between">
              <Grid item>Ordered items</Grid>

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
                  fullWidth
                  placeholder="Search"
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
          }
        />

        <Divider />

        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>

                <TableCell>
                  EAN
                </TableCell>

                <TableCell>
                  SKU
                </TableCell>

                <TableCell>
                  Supplier
                </TableCell>

                <TableCell>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {items.slice(0, limit).map((item) => (
                <TableRow
                  hover
                  key={item.ean}
                >
                  <TableCell>
                    {item.name}
                  </TableCell>

                  <TableCell>
                    {item.ean}
                  </TableCell>

                  <TableCell>
                    {item.sku}
                  </TableCell>

                  <TableCell>
                    {item.supplier}
                  </TableCell>

                  <TableCell>
                    {item.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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
    </Container>
  )
}
