import Head from 'next/head'
import Link from 'next/link'
import Icon from '@material-ui/core/Icon'
import Navbar from '../src/components/navBar.js'
import Apbar from '../src/components/appBar.js'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import theme from '../src/theme';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHome from '../src/components/cardHome.js'
import Nfeed from '../src/components/nfeed.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 20px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
var d= new Date().getFullYear();

export default function writes() {
  const classes = useStyles();
  return (
    <>
    <div className="container">
      <Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
        <title>My Realms-Painting the world in the rhythm of word/art-feed</title>
        <link rel="icon" href="/favicon.ico" />
        // <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>


      <main className="main">
    <Navbar />
    <Apbar/>


        <h1 className="title">
             <img style={{marginBottom:"5vw"}} className="sub-h" src = "/clicksh.png" alt = "Get in touch"/>
           </h1>
           <img style={{marginBottom:"5vw", paddingBottom:"100px"}} className="vector-2" src="/click_v.svg" />
           <Nfeed
            name="Name Surname"
            time="55s"
            caption="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
            url="/post/12.jpeg"
           />

           <Nfeed
            name="Name Surname"
            time="5d"
            caption="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
            url="/post/13.jpeg"
           />

           <Nfeed
            name="Name Surname"
            time="24m"
            caption="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
            url="/post/14.jpeg"
           />

           <Nfeed
            name="Name Surname"
            time="14h"
            caption="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
            url="/post/16.jpeg"
           />

      </main>
      <footer className="footer">
      <p>&copy; My Realms {d} All rights reserved</p>
      </footer>
    </div>
    </>
  )
}
