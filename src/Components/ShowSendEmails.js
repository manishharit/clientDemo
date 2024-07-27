import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const ShowSendEmails = () => {
  const [rows, setRows] = React.useState(null);

React.useEffect(()=>{
  axios
  .get("http://localhost:8080/api/get/all/email")
  .then((response) => {
    console.log(response);
    setRows(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

  },[])
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell><h1 className="font-bold text-xl">Id</h1></TableCell>
            <TableCell align="right"><h1 className="font-bold text-xl">Name</h1></TableCell>
            <TableCell align="center"><h1 className="font-bold text-xl">Email</h1></TableCell>
            <TableCell align="right"><h1 className="font-bold text-xl">UPI</h1></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows == null ? (
              <h3>No Data Found</h3>
            ) : (
              rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                  <TableCell align="right">{row.id}</TableCell></TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="right">{row.upi}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default ShowSendEmails