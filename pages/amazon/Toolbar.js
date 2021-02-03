import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Card, CardContent, TextField, InputAdornment, SvgIcon, makeStyles, Grid } from '@material-ui/core'
import { Search as SearchIcon } from 'react-feather'

const useStyles = makeStyles((theme) => ({
  root: {}
}))

const suppliers = [
  {
    value: 'all',
    label: 'All Suppliers'
  },
  {
    value: 1,
    label: 'Demo Name'
  }
]

const markets = [
  {
    value: 'all',
    label: 'All Markets'
  },
  {
    value: 'lithuania',
    label: 'Lithuania'
  },
  {
    value: 'latvia',
    label: 'Latvia'
  }
]

export default function Toolbar({ className, ...rest }) {
  const classes = useStyles()
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                SelectProps={{ native: true }}
                fullWidth
                label="Select Market"
                name="market"
                onChange={handleChange}
                required
                select
                value={values.state}
                variant="outlined"
              >
                {markets.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                SelectProps={{ native: true }}
                fullWidth
                label="Select Supplier"
                name="state"
                onChange={handleChange}
                required
                select
                value={values.state}
                variant="outlined"
              >
                {suppliers.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid
              item
              md={4}
              xs={12}
            >
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
                placeholder="Search EAN"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

Toolbar.propTypes = {
  className: PropTypes.string
}

Toolbar.defaultProps = {
  className: null
}
