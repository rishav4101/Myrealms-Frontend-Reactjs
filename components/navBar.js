import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import MenuItem from "./menuLI.js";
import { MenuRounded } from "@material-ui/icons";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow:"1px 0 5px rgba(11, 139, 210, 0.12)",
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    // background:"transparent",
    // backgroundColor: "rgba(16, 204, 249, 0.05)",
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    boxShadow:"2px 0 15px rgba(11, 139, 210, 0.12)",
    backdropFilter: "blur(70px)",
    backgroundColor: "rgba(16, 204, 249, 0.05)",
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  logo: {
    maxWidth: "3vw",
    "@media screen and (max-width: 800px) and (min-width: 500px)": {
      maxWidth: "5vw",
    },
    "@media screen and (max-width: 500px)": {
      maxWidth: "10vw",
    },
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll>
          <AppBar
            style={{
              overflow: "hidden",
              paddingTop: "0",
              backgroundColor: "rgba(16, 204, 249, 0.05)",
              boxShadow: "none",
              backdropFilter: "blur(10px)",
            }}
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton href="/">
                <img
                  className={classes.logo}
                  src="/logo-myr_nb.png"
                  alt="logo"
                />
              </IconButton>
              <IconButton
                style={{
                  outline: "none",
                  color: "#10CCF9",
                  position: "absolute",
                  right: "2vw",
                }}
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <MenuRounded fontSize="large" />
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div
          
           
            className={classes.drawerHeader}
          >
            <IconButton style={{ outline: "none", color:"#FBB591" }} onClick={handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <List style={{ backgroundColor: "rgba(16, 204, 249, 0.09)" }}>
            <ListItem>
              <img
                style={{
                  borderRadius: "100px",
                  maxWidth: "100px",
                  display: "block",
                }}
                src="/avatar-1.jpg"
                alt="avatar-1"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                style={{
                  display: "block",
                  color: "#644154",
                  fontSize: "18px",
                  fontWeight: "lighter",
                  letterSpacing: "3px",
                  textTransform:"none",
                }}
                disableTypography={true}
                primary="Your Name"
              />
            </ListItem>
          </List>

          <List
           
          
          >
            <MenuItem url="/myAcc" name="My Account" icname="face" />
            <MenuItem url="/" name="Home" icname="home" />
          
            <MenuItem url="/about" name="About" icname="more" />
            <MenuItem url="/contact" name="Contacts" icname="contacts" />

            <MenuItem name="Logout" icname="keyboard_return" />
          </List>
        </Drawer>
      </React.Fragment>
      <CssBaseline />
    </div>
  );
}
