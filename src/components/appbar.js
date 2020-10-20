import Link from "next/link";
import Icon from "@material-ui/core/Icon";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PaletteIcon from "@material-ui/icons/Palette";
import CreateIcon from "@material-ui/icons/Create";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },

  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: "0",
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        style={{
          background: "transparent",
          boxShadow: "none",
          backdropFilter: "blur(30px)",
          zIndex: "1000",
        }}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar >
          <div className="cc">
            <IconButton
              style={{color: "#10CCF9", outline: "none", marginRight: "5%" }}
              href="/art"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <PaletteIcon />
            </IconButton>
            <IconButton
              style={{color: "#10CCF9", outline: "none", marginRight: "5%" }}
              href="/writes"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <CreateIcon />
            </IconButton>
            <IconButton
              style={{color: "#10CCF9",outline: "none", marginRight: "5%" }}
              href="/addPost"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <AddCircleIcon />
            </IconButton>
            <IconButton
              style={{color: "#10CCF9",outline: "none" }}
              href="/click"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <PhotoCameraIcon />
            </IconButton>
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
