import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "../components/Card";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Box, Button, TextField } from "@mui/material";
import "./Login.css";

const Register = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let details = {
      id,
      email,
      number,
      password,
    };
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then(() => {
        alert("register successfully");
        navigate("/login");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="bg-color">
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
                <CardHeader id="title" title="Enter Registration Details" />

                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <Grid item xs={12} md={12}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="text"
                        value={id}
                        required
                        className="width p2"
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Enter username"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="email"
                        value={email}
                        required
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
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Enter Mobile Number"
                        className="width p2"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="width p2"
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Button variant="outlined" type="submit" className="p2">
                        Submit
                      </Button>
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
};

export default Register;
