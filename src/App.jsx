import React, { useState } from "react";
import ReactDOM from "react-dom";
import Grid from "@mui/material/Grid";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import Slide from "@mui/material/Slide";

import "./index.css";
import Sidebar from "./Views/Layout/sidebar/sidebar";
import HomeAppBar from "./Views/Layout/appBar";
import { App as Prefernces } from "pref/PreferencesApp";

export const App = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  const barSize = {
    xs: open ? 10 : 12,
  };
  return (
    <ScopedCssBaseline>
      <Grid container>
        {/* Sidebar Component  */}
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100px",
            display: !open && "none",
          }}
        >
          <Sidebar />
        </Grid>

        {/*  Content Component  */}
        <Grid item {...barSize}>
          <HomeAppBar handleOpen={handleOpen} />

          {/*  Routing Should be HERE  */}
          <Grid sx={{ mt: 2, display: "flex", flexDirection: "column" }}>
            <Prefernces />
          </Grid>
        </Grid>
      </Grid>
    </ScopedCssBaseline>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
