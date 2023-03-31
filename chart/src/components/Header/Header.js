import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuComponent from "../Menu";
import { useNavigate } from "react-router-dom";
// import EmpolyeeData from "../EmpolyeeData";
import "./Header.css";

const Header = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '../EmpolyeeData'; 
    navigate(path);
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="left"
          >
            School Management
          </Typography>
        
          <MenuComponent/>
        </Toolbar>
       
      </AppBar>
     
    </Box>
  );
};

export default Header;
