import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Search as SearchIcon, CheckCircle, MinusCircle } from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { 
  Container,
  Box, makeStyles, Grid, Card, TableHead, Table, Typography, TablePagination, SvgIcon,
  CardHeader, Divider, TableBody, TableRow, TableCell, Button, TextField, InputAdornment
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    padding: 0
  },
}))

export default function SuppliersList() {
  const classes = useStyles()
  const [values, setValues] = useState({
    manufacturer: '',
    category: '',
    ean: '',
    sku: '',
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Grid 
      container
      md={12}
      xs={12}
      spacing={3}
      className={classes.root}
    >
      {/* Manufacturer */}
      <Grid
        item
        md={3}
        xs={12}
      >
        <TextField
          fullWidth
          label="Manufacturer"
          name="manufacturer"
          size="small"
          onChange={handleChange}
          value={values.manufacturer}
          variant="outlined"
          required
        />
      </Grid>

      {/* EAN */}
      <Grid
        item
        md={3}
        xs={12}
      >
        <TextField
          fullWidth
          label="EAN"
          name="ean"
          size="small"
          onChange={handleChange}
          value={values.ean}
          variant="outlined"
          required
        />
      </Grid>

      {/* SKU */}
      <Grid
        item
        md={3}
        xs={12}
      >
        <TextField
          fullWidth
          label="SKU"
          name="skur"
          size="small"
          onChange={handleChange}
          value={values.sku}
          variant="outlined"
          required
        />
      </Grid>

      {/* Category */}
      <Grid
        item
        md={3}
        xs={12}
      >
        <TextField
          fullWidth
          label="Category"
          name="category"
          onChange={handleChange}
          select
          SelectProps={{ native: true }}
          value={values.category}
          variant="outlined"
          size="small"
        >
          <option
            key=""
            value=""
          ></option>
          <option
            key="komodos"
            value="komodos"
          >
            Komodos
          </option>
          <option
            key="kėdės"
            value="kėdės"
          >
            Kėdės
          </option>
        </TextField>
      </Grid>

      {/* Filter button */}
      <Grid
        item
        md={12}
        xs={12}
      >
        <Box>
          <Button 
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            onClick={() => router.back()}
          >
            Filter
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
