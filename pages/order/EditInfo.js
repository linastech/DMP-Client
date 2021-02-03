import React, { useState } from 'react'
import { 
  Container, CardContent, TextField, Box, makeStyles, Grid, Card, TextareaAutosize, Chip, TableHead, Table, Typography,
  CardHeader, Divider, TableContainer, TableBody, TableRow, TableCell, Button
} from '@material-ui/core'
import imsStatuses from '@utils/imsStatuses'


const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginBottom: theme.spacing(3)
    },
    textarea: {
      resize: "both",
      rows: '12'
    },
    commentsTextarea: {
      marginTop: theme.spacing(1)
    }
  }
})

export default function EditInfo() {
  const classes = useStyles()
  const [values, setValues] = useState({
    invoice_number: '',
    additional_comment: '',
    comment: ''
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  return (
    <Container className={classes.root} maxWidth={false}>
      <Card>
        <CardHeader title="Additional information" />

        <Divider />

        <form
          autoComplete="off"
          noValidate
        >
          <Card>
            <CardHeader
              title={
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>Main information</Grid>
                  <Grid item md={6} xs={12}>Invoices</Grid>
                </Grid>
              }
            />

            <CardContent>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="IMS Status"
                    name="ims_status"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {imsStatuses.map((option) => (
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
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Status"
                    name="invoice_status"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    <option
                      key='ISSUED'
                      value='ISSUED'
                    >
                      ISSUED
                    </option>
                  </TextField>
                </Grid>

                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Invoice number"
                    name="invoice_number"
                    onChange={handleChange}
                    value={values.invoice_number}
                    variant="outlined"
                  />
                </Grid>
                
                <Grid
                  item
                  md={12}
                  xs={12} 
                >
                  <Typography display="block" variant="h5">Comments</Typography>

                  <TextField
                    fullWidth
                    multiline
                    label="Comment"
                    name="comment"
                    onChange={handleChange}
                    value={values.comment}
                    variant="outlined"
                    rows={5}
                    className={classes.commentsTextarea}
                    inputProps={{ className: classes.textarea }}
                  />
                </Grid>
                
                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    multiline
                    label="Additional Comment"
                    name="additional_comment"
                    onChange={handleChange}
                    value={values.additional_comment}
                    variant="outlined"
                    rows={5}
                    inputProps={{ className: classes.textarea }}
                  />
                </Grid>
              </Grid>
            </CardContent>

            <Divider />

            <Box
              display="flex"
              justifyContent="flex-end"
              p={2}
            >
              <Button
                color="primary"
                variant="contained"
              >
                Save
              </Button>
            </Box>
          </Card>
        </form>
      </Card>
    </Container>
  )
}
