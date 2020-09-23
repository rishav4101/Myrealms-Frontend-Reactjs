import Link from 'next/link'
import Icon from '@material-ui/core/Icon'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';



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
    top: 'auto',
    bottom: "0",
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
style = {{ background:"transparent",boxShadow:"none", backdropFilter:"blur(30px)", zIndex:"1000"}}
       position="fixed" className={classes.appBar}>
        <Toolbar style={{color:"#ED125B"}}>
        <div className="cc">
        <IconButton style={{color:"#ED125B",outline:"none", marginRight:"5%"}} href="/art" edge="start" color="inherit" aria-label="open drawer">
          <img style={{maxWidth:"70%"}} src="/a2.png" alt="art-logo"/>
        </IconButton>
          <IconButton style={{color:"#ED125B",outline:"none", marginRight:"5%"}} href="/art" edge="start" color="inherit" aria-label="open drawer">
            <img style={{width:"70%"}} src="/b.png" alt="blog-logo"/>
          </IconButton>
          <IconButton style={{color:"#ED125B",outline:"none", marginRight:"5%"}} href="/click" edge="start" color="inherit" aria-label="open drawer">
            <img style={{width:"70%"}} src="/c.png" alt="clicks-logo"/>
          </IconButton>
          <IconButton style={{color:"#ED125B",outline:"none"}} href="/writes" edge="start" color="inherit" aria-label="open drawer">
            <img style={{width:"70%"}} src="/w.png" alt="writes-logo"/>
          </IconButton>
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
