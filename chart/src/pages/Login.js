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

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const fromSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/user/" + username)
      .then((res) => {
        return res.json();
      })

      .then((response) => {
        if (Object.keys(response).length === 0) {
          alert("please enter valid username");
        } else {
          if (response.password === password) {
            navigate("/dashboard");
          } else {
            alert("please enter valid password");
          }
        }
      })
      .catch(() => {
        alert("login failed");
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
                <CardHeader id="title" title="Enter Login Details" />

                <CardContent>
                  <form>
                    <Grid item xs={12} md={12}>
                      <TextField
                        id="outlined-basic"
                        required
                        variant="outlined"
                        type="text"
                        value={username}
                        name="username"
                        onChange={(e) => setUserName(e.target.value)}
                        className="width p2"
                        placeholder="Enter username"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="password"
                        required
                        placeholder="Enter Password"
                        className="width p2"
                        value={password}
                        name="password"
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Button
                        variant="outlined"
                        type="submit"
                        onClick={fromSubmit}
                        className="p2"
                        data-test="button1"
                        disabled={username === ""}
                      >
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

export default Login;
