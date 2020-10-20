import Layout from '../src/components/Layout.js'
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
import CardActionArea from '@material-ui/core/CardActionArea';
import ContactCard from '../src/components/contactCard.js'
import { Slide } from 'material-auto-rotating-carousel';
import { red, blue, green } from'@material-ui/core/colors'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import CarouselT from '../src/components/carouselTxt.js'
import Slider from "react-slick";


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

export default function about(props) {
  const classes = useStyles();

  return (
    <>
    <div className="container">
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
        <title>My Realms-Painting the world in the rhythm of word/about</title>
        <link rel="icon" href="/favicon.ico" />
        // <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>


      <main className="main">
      <Navbar />
      <Apbar/>
      <h3>
        <img className="sub-h" src="/about-h.png" alt="About my realms" />
      </h3>
      <img className="vector-2" src="/team.png" />
        <div className="grid" style={{padding:"5vh 5vw 5vh 5vw",backgroundColor:"#EEF7FB"}}>
        <p className="description text" style={{textAlign:"left", padding:"10px"}}>Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit.Sapien pellentesque habitantmorbi tristique senectus et netus.
          <br/>
          <br/>
          Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit. Sapien pellentesque habitant
morbi tristique senectus et netus. Dis parturient montes nascetur ridiculus mus. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Odio ut enim blandit volutpat maecenas. Sed egestas
egestas fringilla phasellus faucibus scelerisque. Suspendisse faucibus interdum posuere lorem.
        </p>
        </div>
        <h3>
          <img className="sub-sh" style={{marginTop:"80px",}} src="/wdts.png" alt="Wanna join us?" />
        </h3>



    <CarouselT className="grid" />

    <h3>
      <img className="sub-sh" style={{marginTop:"80px",marginBottom:"0px"}} src="/teamh.png" alt="Meet our team" />
    </h3>
    <div className="" style={{padding:"0 5vw 5vh 5vw"}}>
    <p className="description text" style={{textAlign:"left", padding:"10px"}}>Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit.Sapien pellentesque habitantmorbi tristique senectus et netus.

    </p>
    </div>



  <div  className={classes.root}>
    <Grid container  direction="row"  justify="center"  spacing={1}>
      <Grid item xs={6} sm={4} md={3} lg={2}>
      <div className="grid"style={{marginTop:"0"}}>
        <ContactCard url="/team/swastik.jpeg" name="Swastik" pos="Founder" />
          </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3}  lg={2}>
      <div className="grid"style={{marginTop:"0"}}>
        <ContactCard url="/team/rishav.jpeg" name="Rishav" pos="Founder" />
          </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3}  lg={2}>
      <div className="grid"style={{marginTop:"0"}}>
        <ContactCard url="/team/sebontika.jpeg" name="Sebontika" pos="Admin-Writes" />
          </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
      <div className="grid"style={{marginTop:"0"}}>
        <ContactCard url="/team/shruti.jpeg" name="Shruti" pos="Admin-clicks" />
          </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3}  lg={2}>
      <div className="grid"style={{marginTop:"0"}}>
        <ContactCard url="/team/chitrita.jpeg" name="Chitrita" pos="Admin-art" />
          </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3}  lg={2}>
      <div className="grid"style={{marginTop:"0"}}>
        <ContactCard url="/team/pranayan.jpeg" name="Pranayan" pos="Admin-writes" />
          </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
      <div className="grid"style={{marginTop:"0"}}>
        <ContactCard url="/team/sibashish.jpeg" name="sibashish" pos="Admin-clicks" />
          </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
      <div className="grid"style={{marginTop:"0"}}>
        <ContactCard url="/team/aditya.jpeg" name="Aditya" pos="Head-SMM" />
          </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
      <div className="grid"style={{marginTop:"0"}}>
        <ContactCard url="/team/rohan.jpeg" name="Rohan" pos="Admin-Facebook" />
          </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
      <div className="grid"style={{marginTop:"0"}}>
        <ContactCard url="/team/sakshi.jpeg" name="Sakshi" pos="Head-Content" />
          </div>
      </Grid>
      </Grid>
    </div>

    <h3>
      <img className="sub-sh" style={{marginTop:"60px",marginBottom:"0px"}} src="/wjs.png" alt="Wanna join us?" />
    </h3>
    <div style={{padding:"0 5vw 0 5vw"}}>
    <p className="description text" style={{textAlign:"left", padding:"10px"}}>Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit.Sapien pellentesque habitantmorbi tristique senectus et netus.
    </p>
    <p className="description text" style={{textAlign:"left", padding:"10px"}} >We're more than glad to welcome new members to our community.</p>

    </div>
    <Button href="/about" style={{textTransform:"uppercase", fontFamily:"Century Gothic",fontSize:"16px",borderRadius:"200px", backgroundColor:"#71092C", color:"#ffffff",maxWidth:"70vw", minWidth:"20vw",  boxShadow:" 0 4px 10px #BEBEBE", padding:"7px 40px", }}  varient="contained" >Fill The Form</Button>




      </main>

      <footer className="footer">
        <p>&copy; My Realms {d} All rights reserved</p>
      </footer>
    </div>
    </>
  );
}
