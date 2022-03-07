import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

export const TicketListResults = ({ tickets, ...rest }) => {
  const [selectedTicketIds, setSelectedTicketIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedTicketIds;

    if (event.target.checked) {
      newSelectedTicketIds = tickets.map((ticket) => ticket.id);
    } else {
      newSelectedTicketIds = [];
    }

    setSelectedTicketIds(newSelectedTicketIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedTicketIds.indexOf(id);
    let newSelectedTicketIds = [];

    if (selectedIndex === -1) {
      newSelectedTicketIds = newSelectedTicketIds.concat(selectedTicketIds, id);
    } else if (selectedIndex === 0) {
      newSelectedTicketIds = newSelectedTicketIds.concat(selectedTicketIds.slice(1));
    } else if (selectedIndex === selectedTicketIds.length - 1) {
      newSelectedTicketIds = newSelectedTicketIds.concat(selectedTicketIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedTicketIds = newSelectedTicketIds.concat(
        selectedTicketIds.slice(0, selectedIndex),
        selectedTicketIds.slice(selectedIndex + 1)
      );
    }

    setSelectedTicketIds(newSelectedTicketIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedTicketIds.length === tickets?.length}
                    color="primary"
                    indeterminate={
                      selectedTicketIds.length > 0 &&
                      selectedTicketIds.length < tickets.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Ticket</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Customer id</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.slice(0, limit).map((ticket) => (
                <TableRow
                  hover
                  key={ticket.id}
                  selected={selectedTicketIds.indexOf(ticket.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedTicketIds.indexOf(ticket.id) !== -1}
                      onChange={(event) => handleSelectOne(event, ticket.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                    <Typography color="textPrimary" variant="body1">
                      {ticket.id}
                    </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{ticket.city}</TableCell>
                  <TableCell>
                    {ticket.state}
                  </TableCell>
                  <TableCell>{ticket.customerId}</TableCell>
                  <TableCell>{ticket.totalPrice}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={tickets.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

TicketListResults.propTypes = {
  tickets: PropTypes.array.isRequired,
};
