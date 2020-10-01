import Head from 'next/head'
import Link from 'next/link'
import Icon from '@material-ui/core/Icon'
import Navbar from '../src/components/navBar'
import Apbar from '../src/components/appbar.js'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import theme from '../src/theme';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import React from 'react';
var d= new Date().getFullYear();


export default function start() {

  return (
    <>
    <div className="container">
      <Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
        <title>My Realms-Painting the world in the rhythm of word/start</title>
        <link rel="icon" href="/favicon.ico" />
        // <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>


      <main className="main">


    <h1 className="title" style={{marginTop:"10vh", marginBottom:"0"}}>
         <img className="heading" src = "/ht3.png" alt = "Hello There!"/>
       </h1>
       <h2 style={{ marginTop:"0", marginBottom:"0"}} className="b-margin subt">
          Welcome to my Realms
       </h2>
<h2 style={{margin:"15vh auto 20px"}} className="b-margin subt">
   I'm coming back,
</h2>
<Button href="/signIn" style={{textTransform:"uppercase", fontFamily:"Century Gothic",fontSize:"16px",borderRadius:"200px", backgroundColor:"#Ed165a", color:"#FDE7EB",maxWidth:"70vw", minWidth:"20vw",  boxShadow:" 0 4px 10px #BEBEBE", padding:"7px 50px", }}  varient="contained" >Sign Me In</Button>
<h2 style={{margin:"20px auto"}} className="b-margin subt">
   I'm new here,
</h2>
<Button href="signUp" style={{textTransform:"uppercase", fontFamily:"Century Gothic",fontSize:"16px",borderRadius:"200px", backgroundColor:"#Ed165a", color:"#FDE7EB",maxWidth:"70vw", minWidth:"20vw",  boxShadow:" 0 4px 10px #BEBEBE", padding:"7px 50px", }}  varient="contained" >Sign Me Up</Button>


       </main>

       <footer className="footer">
       <p>&copy; My Realms {d} All rights reserved</p>
       </footer>
     </div>
     </>
   )
 }
