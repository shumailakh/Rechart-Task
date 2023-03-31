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
  console.log("id", empid);
  const [studentDetails, setStudentDetails] = useState({});
  console.log(studentDetails);
  useEffect(() => {
    fetch("http://localhost:8000/student/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setStudentDetails(response);
      })
      .catch((err) => {
        console.log(err.message);
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
              placeholder="Enter username"
            />
            <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            value={studentDetails.number}
            className="width p2"
            readonly
            placeholder="Enter username"
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
