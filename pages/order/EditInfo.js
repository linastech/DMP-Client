import React, { useState } from 'react'
import {DropzoneArea, DropzoneDialog} from 'material-ui-dropzone'
import { 
  Container, CardContent, TextField, Box, makeStyles, Grid, Card, Typography,
  CardHeader, Divider, Button, List, ListItem, ListItemText 
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
      marginTop: theme.spacing()
    },
    commentsTextarea: {
      marginTop: theme.spacing(1)
    },
    complaintHeader: {
      marginBottom: `-${theme.spacing(2)}px`,
      marginTop: theme.spacing(5)
    },
    commentsHeader: {
      marginTop: theme.spacing(5)
    },
    photosHeader: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(2)
    },
    internalCode: {
      marginTop: theme.spacing(3.6)
    }
  }
})

export default function EditInfo() {
  const classes = useStyles()
  const [values, setValues] = useState({
    ims_state: 'NEW',
    invoice_state: 'NEW',
    invoice_number: '',
    additional_comment: '',
    comment: '',
    complaint_status: null,
    refund: '',
    supplier: null,
    identification: '',
    files: [],
    sold_to: '',
    files_state: false,
    name_address: '',
    internal_code: '',
    phone_number: '',
    sent_date: '',
    tracking_code: '',
    return_internal_code: '',
    shipping_cost: '',
    return_shipping_cost: '',
    courier: ''
  })

  const [images, setImages] = useState(false)

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }


  const handleClose = () => {
    setValues({
      ...values,
      files_state: false
    })
  }

  const handleSave = (files) => {
    //Saving files to state for further use and closing Modal.
    setValues({
      ...values,
        files: files,
        files_state: false
    })
  }

  const handleOpen = () => {
    setValues({
      ...values,
      files_state: true
    })
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
                  <Grid item md={6} xs={12}>Shipping information</Grid>
                  <Grid item md={6} xs={12}>Invoices</Grid>
                </Grid>
              }
            />

            <CardContent>
              <Grid
                container
                spacing={3}
              >
                {/* IMS status */}
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
                    select
                    SelectProps={{ native: true }}
                    value={values.ims_state}
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
                
                {/* Invoice Status */}
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
                    select
                    SelectProps={{ native: true }}
                    value={values.invoice_state}
                    variant="outlined"
                  >
                    <option
                      key='NEW'
                      value='NEW'
                    >
                      NEW
                    </option>
                    <option
                      key='ISSUED'
                      value='ISSUED'
                    >
                      ISSUED
                    </option>
                  </TextField>
                </Grid>
                
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
                    select
                    SelectProps={{ native: true }}
                    value={values.supplier}
                    variant="outlined"
                  >
                    <option
                      key={null}
                      value={null}
                    >
                      Choose
                    </option>
                  </TextField>
                </Grid>

                {/* Invoice Number */}
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

                {/* Identification */}
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Identification"
                    name="identification"
                    onChange={handleChange}
                    value={values.identification}
                    variant="outlined"
                  />
                </Grid>

                {/* Sold to */}
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Sold to"
                    name="sold_to"
                    onChange={handleChange}
                    value={values.sold_to}
                    variant="outlined"
                  />
                </Grid>

                {/* Photos */}
                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  <Typography
                    display="block"
                    variant="h5"
                    className={classes.photosHeader}
                  >
                    Photos
                  </Typography>

                  <Button 
                    color="primary"
                    variant="contained"
                    onClick={handleOpen}
                  >
                    Add Image
                  </Button>

                  <DropzoneDialog
                      open={values.files_state}
                      onSave={handleSave}
                      acceptedFiles={['image/jpeg', 'image/png']}
                      showPreviews={false}
                      showPreviewsInDropzone={true}
                      maxFileSize={5000000}
                      onClose={handleClose}
                      filesLimit={5}
                  />

                  <List images={images}>
                    {values.files.map((file, key) => (
                      <ListItem>
                        <ListItemText primary={file.name} />
                      </ListItem>
                    ))}
                  </List>

                </Grid>

                {/* Name and address */}
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <Typography display="block" variant="h5">Shipping</Typography>

                  <TextField
                    fullWidth
                    multiline
                    label="Customer full name and address"
                    name="name_address"
                    onChange={handleChange}
                    value={values.name_address}
                    variant="outlined"
                    rows={5}
                    className={classes.commentsTextarea}
                    inputProps={{ className: classes.textarea }}
                  />
                </Grid>

                {/* Interal code */}
                <Grid
                  item
                  md={6}
                  xs={12}
                > 
                  <TextField
                    fullWidth
                    label="Internal code"
                    name="internal_code"
                    onChange={handleChange}
                    value={values.internal_code}
                    variant="outlined"
                    className={classes.internalCode}
                  />
                </Grid>

                {/* Customer phone number */}
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Customer phone number"
                    name="phone_number"
                    onChange={handleChange}
                    value={values.phone_number}
                    variant="outlined"
                  />
                </Grid>

                {/* Return internal code */}
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Return internal code"
                    name="return_internal_code"
                    onChange={handleChange}
                    value={values.return_internal_code}
                    variant="outlined"
                  />
                </Grid>

                {/* Sent date */}
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Sent date"
                    name="sent_date"
                    onChange={handleChange}
                    value={values.sent_date}
                    variant="outlined"
                  />
                </Grid>

                {/* Shipping cost */}
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Shipping cost"
                    name="shipping_cost"
                    onChange={handleChange}
                    value={values.shipping_cost}
                    variant="outlined"
                  />
                </Grid>

                {/* Tracking code */}
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Tracking Code"
                    name="tracking_code"
                    onChange={handleChange}
                    value={values.tracking_code}
                    variant="outlined"
                  />
                </Grid>

                {/* Invoice Status */}
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Courier"
                    name="courier"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.courier}
                    variant="outlined"
                  >
                    <option
                      key='GLS'
                      value='GLS'
                    >
                      GLS
                    </option>
                    <option
                      key='TNT'
                      value='TNT'
                    >
                      TNT
                    </option>
                  </TextField>
                </Grid>

                {/* Return shipping cost */}
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Return shipping cost"
                    name="return_shipping_cost"
                    onChange={handleChange}
                    value={values.return_shipping_cost}
                    variant="outlined"
                  />
                </Grid>

                {/* Tracking number */}
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Tracking code"
                    name="tracking_code"
                    onChange={handleChange}
                    value={values.tracking_code}
                    variant="outlined"
                  />
                </Grid>

                {/* Complaints Header */}
                <Grid 
                  item 
                  md={12}
                  xs={12}
                  className={classes.complaintHeader}
                >
                  <Typography variant="h5">
                      Complaints
                  </Typography>
                </Grid>
                
                {/* Complaint Header */}
                <Grid
                  item
                  md={6}
                  xs={12}
                  className={classes.complaintGrid}
                >
                  <TextField
                    fullWidth
                    label="Refund"
                    name="refund"
                    onChange={handleChange}
                    value={values.refund}
                    variant="outlined"
                  />
                </Grid>

                {/* Complaint Statuts */}
                <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Status"
                  name="complaint_status"
                  onChange={handleChange}
                  select
                  SelectProps={{ native: true }}
                  value={values.complaint_status}
                  variant="outlined"
                >
                  <option
                    key={null}
                    value={null}
                  >
                    Choose
                  </option>
                  <option
                    key='COMPLAINT_ISSUED'
                    value='COMPLAINT_ISSUED'
                  >
                    Complaint Issued
                  </option>
                  <option
                    key='WAITING_CONFIRMATION'
                    value='WAITING_CONFIRMATION'
                  >
                    Waiting for confirmation
                  </option>
                  <option
                    key='WAITING_PAYMENT'
                    value='WAITING_PAYMENT'
                  >
                    Waiting for payment
                  </option>
                  <option
                    key='COMPLETE'
                    value='COMPLETE'
                  >
                    Complete
                  </option>
                </TextField>
              </Grid>

                {/* Comments */}
                <Grid
                  item
                  md={12}
                  xs={12} 
                >
                  <Typography className={classes.commentsHeader} variant="h5">Comments</Typography>

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

                {/* Aditional Comments */}
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
