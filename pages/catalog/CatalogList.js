import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Search as SearchIcon, CheckCircle, MinusCircle, Edit } from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Box, makeStyles, TableHead, Table, TablePagination, SvgIcon, TableBody, TableRow, TableCell } from '@material-ui/core'

const items = [
  {
    id: 0,
    name: 'Amazfit BIP U Smartwatch pink',
    ean: '4064307171531',
    offer_ean: '4064307171531',
    price: '4,00',
    stock: 10,
    sku: 'Z148-023000'
  },
  {
    id: 0,
    name: 'Apple iMac 21,5"" Retina 4K 3,6/16/256GB SSD RP555X BTO',
    ean: '4064307171531',
    offer_ean: '4064307151531',
    price: '423,00',
    stock: 10,
    sku: 'Z148-023000'
  },
  {
    id: 0,
    name: 'BenQ EX2780Q 67cm (27"") WQHD IPS Gaming-Monitor DP/HDMI/USB-C 5ms 144Hz FreeSync',
    ean: '4064307171531',
    offer_ean: '4064307171531',
    price: '1234,00',
    stock: 10,
    sku: 'Z148-023000'
  }
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
  eanMatch: {
    color: '#26bf26',
  },
  eanNoMatch: {
    color: '#ff6262'
  },
  ean: {
    paddingTop: '.3em',
    paddingBottom: '.3em'
  },
  eanIcon: {
    marginRight: '.3em',
    height: '1.3em'
  },
  checkContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  changeEan: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '.3em',
    '& > svg': {
      height: '1.3em'
    }
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
    <div>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow className={clsx(classes.tableRow, classes.header)}>
                <TableCell>
                  Name
                </TableCell>

                <TableCell>
                  Offer EAN
                </TableCell>

                <TableCell>
                  Stock
                </TableCell>

                <TableCell>
                  Price of product
                </TableCell>

                <TableCell>
                  SKU
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
                    <div>
                      <Link href={`/item/${item.id}`}>
                        <a>{item.name}</a>
                      </Link>
                    </div>

                    <div className={classes.ean}>
                      Card EAN:&nbsp;
                      <Link href={`/item/${item.id}`}>
                        <a>{item.ean}</a>
                      </Link>
                    </div>

                    {item.ean === item.offer_ean && (
                      <div className={clsx(classes.checkContainer, classes.eanMatch)}>
                        <CheckCircle className={classes.eanIcon} />
                        EAN matches the offer
                      </div>
                    )}

                    {item.ean !== item.offer_ean && (
                      <div className={clsx(classes.checkContainer, classes.eanNoMatch)}>
                        <MinusCircle className={classes.eanIcon} />
                        EAN does not match the offer
                      </div>
                    )}
                  </TableCell>

                  <TableCell>
                    <div>
                      {item.ean}
                    </div>
                    
                    <div>
                      <Link href="#">
                        <a className={classes.changeEan}>
                          <Edit />&nbsp;
                          Change
                        </a>
                      </Link>
                    </div>
                  </TableCell>

                  <TableCell>
                    {item.stock}
                  </TableCell>

                  <TableCell>
                    {item.price}
                  </TableCell>

                  <TableCell>
                    {item.sku}
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
    </div>
  )
}
