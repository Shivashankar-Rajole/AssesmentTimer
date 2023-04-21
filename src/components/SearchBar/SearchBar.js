import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";


import AddTimerBtn from "./AddTimerBtn";
export default function SearchBar(props) {
  const { createTimer } = props;

  
  return (
    <Box sx={{ flexGrow: 1, width: "15%" }}>
      <AppBar position="relative">
        <Toolbar>   
          <AddTimerBtn createTimer={createTimer} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
