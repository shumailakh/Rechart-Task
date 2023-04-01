import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import '../pages/Login.css'

const EmpolyeeData = () => {
  const [studentData, setStudentData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setStudentData(response);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <Container className="width">
    <div className="flex">
    <h4>Registered Student</h4>
    
    </div>
   
      <Box color="white">
        <Grid item xs={12} md={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Number</TableCell>

               
                </TableRow>
              </TableHead>
              <TableBody data-testid="title">
                {studentData &&
                  studentData.map((item) => {
                    return (
                      <TableRow key={item.id} data-testid="description">
                        <TableCell component="th" scope="row">
                          {item.id}
                        </TableCell>
                        <TableCell align="right">{item.email}</TableCell>
                        <TableCell align="right">{item.number}</TableCell>

                     
                      </TableRow>
                    );
                  })}

          
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </Container>
  );
};

export default EmpolyeeData;
