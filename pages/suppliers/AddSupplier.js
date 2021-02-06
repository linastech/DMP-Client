import React, { useState } from 'react'
import clsx from 'clsx'
import { Search as SearchIcon } from 'react-feather'
import {DropzoneArea, DropzoneDialog} from 'material-ui-dropzone'
import { 
  Box, makeStyles, Grid, Card, Typography, Button,
  CardHeader, Divider, TextField, CardContent
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

}))

export default function SuppliersList() {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const classes = useStyles()
  
  const [values, setValues] = useState({
    supplier: '',
    status: '',
    delivery_period: '',
    minimal_items_cost: '',
    margin: ''
  })
  
  const handleLimitChange = (event) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  return (
  <Card>
    <CardHeader
      title={
        <Grid container justify="space-between">
          <Grid item>Add Supplier</Grid>

          <Grid item>
            <Button 
              color="primary"
              variant="contained"
            >
              Select XML/CSV
            </Button>
          </Grid>
        </Grid>
      }
    />

    <Divider />

    <CardContent>
      <Grid
        container
        spacing={3}
        md={12}
        xs={12}
      >
        {/* Supplier */}
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Supplier"
            name="supplier"
            onChange={handleChange}
            value={values.supplier}
            variant="outlined"
          />
        </Grid>

        {/* Status */}
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Status"
            name="status"
            onChange={handleChange}
            select
            SelectProps={{ native: true }}
            value={values.status}
            variant="outlined"
            required
          >
            <option></option>
            <option
              key='ACTIVE'
              value='ACTIVE'
            >
              Active
            </option>
            <option
              key='DISABLED'
              value='DISABLED'
            >
              Disabled
            </option>
          </TextField>
        </Grid>

        {/* Delivery period */}
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Delivery period"
            name="delivery_period"
            onChange={handleChange}
            value={values.delivery_period}
            variant="outlined"
          />
        </Grid>

        {/* Minimal cost of items */}
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Minimal cost of items"
            name="minimal_items_cost"
            onChange={handleChange}
            value={values.minimal_items_cost}
            variant="outlined"
          />
        </Grid>

        {/* Margin */}
        <Grid
          item
          md={12}
          xs={12}
        >
          <TextField
            fullWidth
            label="Margin"
            name="margin"
            onChange={handleChange}
            value={values.margin}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  )
}
