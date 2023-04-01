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
import { useNavigate } from "react-router-dom";
import '../pages/Login.css'

const StudentCreateList = () => {
 const navigate = useNavigate();
  const [studentData, setStudentData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/student")
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
const loadEdit=(id)=>{
    navigate("/studenteditprofile/"+id);
}
const loadDetails=(id)=>{
    navigate("/studentdetail/"+id);
}
const removeItem=(id)=>{
   if(window.confirm('Do you want to delete Data')){
    fetch('http://localhost:8000/student/' + id,{
     method : 'DELETE'
    }).then((res)=>{
        alert('Removed Successfully')
        window.location.reload()
    }).catch((err)=>{
    alert(err.message)
    })
   }
}
  return (
    <Container className="width">
    <div className="flex">
    <h4>New Student List</h4>
      <a href="./StudentCreate" className="padding20">
        Add New Details
      </a>
    </div>
   
      <Box color="white">
        <Grid item xs={12} md={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                <TableCell>id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Number</TableCell>

                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentData &&
                  studentData.map((item) => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell component="th" scope="row">
                          {item.id}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell align="right">{item.email}</TableCell>
                        <TableCell align="right">{item.number}</TableCell>

                        <TableCell align="right">
                          <a  className="m2" onClick={()=>{
                            loadDetails(item.id)
                          }}>Details</a>
                          <a className="m2" onClick={()=>{
                            loadEdit(item.id)
                          }}>Edit</a>
                          <a  className="m2" onClick={()=>{
                            removeItem(item.id)
                          }}>delete</a>
                        </TableCell>
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

export default StudentCreateList;
