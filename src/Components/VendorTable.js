import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const VendorTable = () => {
  const [rows, setRows] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    //fetch all rows of employee from backend
    axios
      .get("http://localhost:8080/api/get/vendor")
      .then((response) => {
        console.log(response);
        setRows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (name,email,upi) => {
    const request = {
      name: name,
      email: email,
      upi: upi,
    }
    // e.preventDefault();

    axios.post("http://localhost:8080/api/send/email", request)
    .then(()=>{
      alert("Email sent")
    })
    .catch(()=>{
      alert("having some problem")
    });

  };
  const showEmails = (e) => {
    navigate("/allemails");
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell><h1 className="font-bold text-xl">Id</h1></TableCell>
            <TableCell align="right"><h1 className="font-bold text-xl">Name</h1></TableCell>
            <TableCell align="center"><h1 className="font-bold text-xl">Email</h1></TableCell>
            <TableCell align="right"><h1 className="font-bold text-xl">UPI</h1></TableCell>
            <TableCell align="right"><h1 className="font-bold text-xl">Send Email</h1></TableCell>
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
                  <TableCell align="right">
                    <button 
                    onClick={()=>handleSubmit(row.name, row.email, row.upi)}
                    className="bg-orange-400 pr-5 pl-5 pt-1 pb-1 rounded-md"
                    >Email</button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="text-center pt-10">
        <button
          className=" px-2  border bg-blue-500 font-mono text-white rounded-md"
          onClick={showEmails}
        >
          See all sent emails
        </button>
      </div>
    </>
  );
};

export default VendorTable;
