import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";

const AddTicket = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      id: "",
      city: "",
      state: "SC",
      phone: "",
      ticketDate: "",
      customerId: "",
      service: "",
      servicePrice: "",
      addOn: "",
      addOnPrice: "",
      coupon: "",
      preferred: false,
    },
    validationSchema: Yup.object({
      id: Yup.string().max(15).required("ID is required, info here"),
      city: Yup.string().max(255).required("The city is required"),
      state: Yup.string().max(255).required("The state is required"),
      phone: Yup.string().max(11),
      ticketDate: Yup.string().max(255).required("Date of the purchase"),
      customerId: Yup.string().max(10).required("Date of the purchase"),
      service: Yup.string().max(255).required("Service Purchased"),
      servicePrice: Yup.string().max(5).required("Price of the Service"),
      addOn: Yup.string().max(255),
      addOnPrice: Yup.string().max(5),
      coupon: Yup.string().max(15),
      preferred: Yup.boolean(),
    }),
    onSubmit: () => {
      // router.push("/");
      const ticket = {
        id: formik.values.id,
        city: formik.values.city,
        state: formik.values.state,
        phone: formik.values.phone,
        ticketDate: formik.values.ticketDate,
        customerId: formik.values.customerId,
        service: formik.values.service,
        servicePrice: formik.values.servicePrice,
        addOn: formik.values.addOn,
        addOnPrice: formik.values.addOnPrice,
        coupon: formik.values.coupon,
        preferred: formik.values.preferred,
      };

      fetch('/api/tickets', {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:5000'
        },
        body: JSON.stringify(ticket)
      }).then(() => {
        console.log('added');
      }).catch((err) => {
        console.error('fetch err: ', err);
      });
      
    },
  });

  return (
    <>
      <Head>
        <title>AddTicket | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new Ticket
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Enter the information regarding the customer purchase.
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.id && formik.errors.id)}
              fullWidth
              helperText={
                formik.touched.id && (
                  <NextLink href="#" passHref>
                    <Link color="primary" underline="always" variant="subtitle2">
                      {formik.errors.id}
                    </Link>
                  </NextLink>
                )
              }
              label="Ticket Id"
              margin="normal"
              name="id"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.id}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.city && formik.errors.city)}
              fullWidth
              helperText={formik.touched.city && formik.errors.city}
              label="City"
              margin="normal"
              name="city"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.city}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.state && formik.errors.state)}
              fullWidth
              helperText={formik.touched.state && formik.errors.state}
              label="State"
              margin="normal"
              name="state"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.state}
              variant="outlined"
            />

            <TextField
              label="Phone Number"
              margin="normal"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="phone"
              value={formik.values.phone}
              variant="outlined"
            />

            <TextField
              error={Boolean(formik.touched.ticketDate && formik.errors.ticketDate)}
              fullWidth
              helperText={formik.touched.ticketDate && formik.errors.ticketDate}
              label="Date of Purchase"
              margin="normal"
              name="ticketDate"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.ticketDate}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.customerId && formik.errors.customerId)}
              fullWidth
              helperText={formik.touched.customerId && formik.errors.customerId}
              label="Customer ID"
              margin="normal"
              name="customerId"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.customerId}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.service && formik.errors.service)}
              fullWidth
              helperText={formik.touched.service && formik.errors.service}
              label="Service Purchased"
              margin="normal"
              name="service"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.service}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.servicePrice && formik.errors.servicePrice)}
              fullWidth
              helperText={formik.touched.servicePrice && formik.errors.servicePrice}
              label="Price of Service"
              margin="normal"
              name="servicePrice"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.servicePrice}
              variant="outlined"
            />
            <TextField
              label="Additional Service"
              margin="normal"
              name="addOn"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.addOn}
              variant="outlined"
            />
            <TextField
              label="Additional Service Price"
              margin="normal"
              name="addOnPrice"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.addOnPrice}
              variant="outlined"
            />
            <TextField
              label="Coupon Price"
              margin="normal"
              name="coupon"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.coupon}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox
                checked={formik.values.preferred}
                name="preferred"
                onChange={formik.handleChange}
              />
              <Typography color="textPrimary" variant="body2">
                This is a preferred customer{" "}
                <NextLink href="#" passHref>
                  <Link color="primary" underline="always" variant="subtitle2">
                    (What is this?)
                  </Link>
                </NextLink>
              </Typography>
            </Box>

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Submit Ticket
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
AddTicket.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AddTicket;
