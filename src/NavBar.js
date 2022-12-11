import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HubIcon from "@mui/icons-material/Hub";

import DrawerComp from "./DrawerComp";

const PAGES = ["about", "Works", "Contact"];
function NavBar() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <HubIcon />
          <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
            Takuya
          </Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <Tabs
              sx={{ paddingLeft: "10%" }}
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
              indicatorColor="secondary"
            >
              {PAGES.map((page, index) => (
                <Tab label={page} key={index}></Tab>
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;
