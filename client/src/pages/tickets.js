import Head from "next/head";
import { Box, Container } from "@mui/material";
import { TicketListResults } from "../components/ticket/ticket-list-results";
import { TicketListToolbar } from "../components/ticket/ticket-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
// import { tickets } from "../__mocks__/tickets";

const Tickets = ({ tickets }) => (
  <>
    <Head>
      <title>Tickets | AutoBell Sales</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <TicketListToolbar />
        <Box sx={{ mt: 3 }}>
          <TicketListResults tickets={tickets} />
        </Box>
      </Container>
    </Box>
  </>
);
Tickets.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export async function getStaticProps() {
  const res = await fetch('http://localhost:5000/api/tickets');
  const tickets = await res.json();

  return {
    props: {
      tickets
    }
  }
}

export default Tickets;
