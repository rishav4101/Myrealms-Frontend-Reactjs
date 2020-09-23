import Head from 'next/head'
import Link from 'next/link'
import Icon from '@material-ui/core/Icon'
import Navbar from '../components/navBar'
import Apbar from '../components/appBar.js'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import theme from '../theme';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHome from '../components/cardHome.js'


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

export default function Layout(props) {
  const classes = useStyles();
  return (
    <>
    <div className="container">
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
        <title>My Realms-Painting the world in the rhythm of word/{props.page}</title>
        <link rel="icon" href="/favicon.ico" />
        // <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>


      <main className="main">
      <Navbar />
      <Apbar/>


      </main>

      <footer className="footer">
        <p>&copy; My Realms {d} All rights reserved</p>
      </footer>
    </div>
    </>
  );
}
