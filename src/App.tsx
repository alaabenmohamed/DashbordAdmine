/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prefer-const */
import * as React from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { getDesignTokens } from "./Theme";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";




const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
 const [mode, setMode] = React.useState(
   localStorage.getItem("currentMode")
     ? localStorage.getItem("currentMode")
     : "light"
 );
    const theme = React.useMemo(
      () => createTheme(getDesignTokens(mode)),
      [mode]
    );

  const [conexions, setconexions] = useState("");
  useEffect(() => {
    let userRegister: any = localStorage.getItem("conexions");
    setconexions(userRegister);
        console.log(conexions);
console.log(userRegister);
  }, [conexions]);
  return (
    <Box>
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <TopBar {...{ setOpen, open, setMode }} />
            <SideBar {...{ setOpen, open }} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              <Outlet />
            </Box>
          </Box>
        </ThemeProvider>

    </Box>
  );
}
