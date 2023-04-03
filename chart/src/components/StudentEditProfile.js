import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CardComponent from "./Card";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
const StudentEditProfile = () => {
  const navigate = useNavigate();
  const { empid } = useParams();

  const [studentDetails, setStudentDetails] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/student/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setId(response.id);
        setName(response.name);
        setEmail(response.email);
        setNumber(response.number);
        setActive(response.active);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [active, setActive] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    let edit = {
      id,
      name,
      email,
      number,
      active,
    };

    fetch("http://localhost:8000/student/" + empid, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(edit),
    })
      .then(() => {
        alert("Saved successfully");
        navigate("/studentCreateList");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Container>
      <div
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "50%",
        }}
      >
        <Grid item xs={12} md={12}>
          <CardComponent>
            <CardHeader title="Edit Student Details" />
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
                    placeholder="Enter Id"
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
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        onChange={(e) => setActive(e.target.checked)}
                        checked={active}
                      />
                    }
                    label="Active"
                  />
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
      </div>
    </Container>
  );
};

export default StudentEditProfile;
