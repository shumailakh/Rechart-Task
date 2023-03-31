import React from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const MenuComponent = () => {
  const [anchor, setAnchor] = useState(null);

  const [selected, setSelected] = useState(-1);

  const openMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchor(null);
  };

  const onMenuItemClick = (event, index) => {
    setAnchor(null);
    setSelected(index);
  };
  return (
    <Box>
      <Button onClick={openMenu} color="primary" variant="contained">
        Menu
      </Button>

      <Menu
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={closeMenu}
        keepMounted
      >
              
        <MenuItem>
          <a href="../StudentCreate">New Student Profile</a>
        </MenuItem>
        <MenuItem> <a href="../StudentCreateList">New Student List</a></MenuItem>
        <MenuItem><a href="/">Logout</a></MenuItem>
      </Menu>
    </Box>
  );
};

export default MenuComponent;
