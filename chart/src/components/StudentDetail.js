import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardComponent from "./Card";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import { Grid, TextField } from "@mui/material";
const StudentDetail = () => {
  const { empid } = useParams();
  
  const [studentDetails, setStudentDetails] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/student/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setStudentDetails(response);
      })
      .catch((err) => {
       alert(err.message);
      });
  }, []);
  return (
    <Container>
      <Grid item xs={12} md={12}>
        <CardComponent>
            
       
        <CardHeader title="New Student Details" />
        <CardContent>
          <Grid item xs={12} md={12}>
            {studentDetails && (
                <>
                  <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                value={studentDetails.name}
                className="width p2"
                readonly
                placeholder="Enter username"
              />
              <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              value={studentDetails.email}
              className="width p2"
              readonly
              placeholder="Enter Email"
            />
            <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            value={studentDetails.number}
            className="width p2"
            readonly
            placeholder="Enter Number"
          />
                </>
            
            )}
          </Grid>
        </CardContent>
        </CardComponent>
      </Grid>
    
    </Container>
  );
};

export default StudentDetail;
