import React from 'react'

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "./Card";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Box, Button, TextField,FormControlLabel,Checkbox } from "@mui/material";
import '../pages/Login.css'
const StudentCreate = () => {
    const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [active, setActive] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    let create = {
      id,
      name,
      email,
      number,
      active,
    };
    console.log(create)
    fetch("http://localhost:8000/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(create),
    })
      .then(() => {
        alert("Save successfully");
        navigate("/studentCreateList");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  
    return (
      <div>
        <Container className="padding">
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              margin: "auto",
              width: "50%",
            }}
          >
          <Box color="white">
            <Grid item xs={12} md={12}>
              <CardComponent className="card mt-5">
                <CardHeader id="title" title="Student Profile" />

                <CardContent>
                  <form onSubmit={handleSubmit}>
                  <Grid item xs={12} md={12}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="text"
                        value={id}
                        
                        className="width p2"
                        disabled="disabled"
                        placeholder="Student ID"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="text"
                        value={name}
                        
                        className="width p2"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter username"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="email"
                        value={email}
                        
                        onChange={(e) => setEmail(e.target.value)}
                        className="width p2"
                        placeholder="Enter Email ID"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="text"
                        
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Enter Mobile Number"
                        className="width p2"
                      />
                    </Grid>
                    <Grid item xs={12} md={12} className="left">
                    <FormControlLabel control={<Checkbox defaultChecked  onChange={(e) => setActive(e.target.checked)} checked={active}/>} label="Active" />
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <Button variant="outlined" type="submit" className="p2">
                        Save
                      </Button>
                      <a href="/" className="p2 btn">
                        Back
                      </a>
                    </Grid>
                  </form>
                </CardContent>
              </CardComponent>
            </Grid>
          </Box>
          </div>
        </Container>
      </div>
    );
}

export default StudentCreate