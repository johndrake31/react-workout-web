import React from "react";
import { AppBar, Box, Button, IconButton, Toolbar, Typography, } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';




const Header = () => {

  return (
    // <Box
    // //   sx={{
    // //     width: "100%",
    // //     height: 300,
    // //     backgroundColor: "primary.dark",
    // //     "&:hover": {
    // //       backgroundColor: "primary.main",
    // //       opacity: [0.9, 0.8, 0.7],
    // //     },
    // //   }}
    // >
    <>
    
      <AppBar position="fixed" sx={{}}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{
              mr: 2,
              "&:hover": {
              backgroundColor: "primary",
              opacity: [0.9, 0.8, 0.7],
            }}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="secondary" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="secondary">Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{mb:5}}/>        
      </>
  );
};

export default Header;
