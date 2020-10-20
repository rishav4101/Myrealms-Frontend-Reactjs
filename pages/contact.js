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
import IconButton from '@material-ui/core/IconButton';



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

export default function Home() {
  const classes = useStyles();
  return (
    <>
    <div className="container">
      <Head>
      <script src="https://kit.fontawesome.com/138839f9b6.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
        <title>My Realms-Painting the world in the rhythm of word/Contact</title>
        <link rel="icon" href="/favicon.ico" />
        // <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>


      <main className="main">
    <Navbar />

    <h1 className="title">
         <img style={{marginBottom:"5vw", paddingTop:"3vw"}} className="heading" src = "/git.png" alt = "Get in touch"/>
       </h1>
       <img style={{marginBottom:"5vw"}} className="vector-2" src="/contact.svg" />
       <h3>
         <img className="sub-sh" style={{marginTop:"80px"}} src="/wws.png" alt="Wanna write to us?" />
       </h3>
           <div style={{borderRadius:"10px",width:"100%",backgroundColor:"#EEF7FB", padding:"10vw"}} >
              <form>
              <div className="form-group " >
              <input style={{marginBottom:"4vw", background:"transparent", border:"1px solid #1A3D60"}} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
              <input style={{marginBottom:"4vw", background:"transparent", border:"1px solid #1A3D60"}} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email"/>
              <textarea style={{marginBottom:"4vw", background:"transparent", border:"1px solid #1A3D60"}} className="form-control" id="exampleFormControlInput1" placeholder="Type your message..." rows="5"/>
              </div>
              <Button className="btn" href="mailto:my.realms.44@gmail.com"
              style={{

                fontFamily:"Century Gothic",

              borderRadius:"5px",
              backgroundColor:"#1A3D60",
              color:"#d1e9f5"
            }}
              fullWidth={true}
               size="large"
               varient="contained"
               >Send</Button>
              </form>
           </div>
           <div className="contact" style={{borderRadius:"10px", backgroundColor:"#EEF7FB", }} >
           <div style={{textAlign:"center"}} className="form-group" >
           <p style={{fontSize:"20px"}} ><Icon style={{fontSize:30, overflow:"visible", padding:"20px 40px 20px 0", color:"#1A3D60"}} >phone_in_talk</Icon> 9876543210 </p>
           <p style={{fontSize:"20px"}} ><i style={{padding:"20px 10px", color:"#1A3D60"}} class="fab fa-2x fa-whatsapp"></i> 7894560321 </p>
           <br/>
           <h3>
             <img className="sub-sh" style={{marginTop:"30px"}} src="/vopn2.png" alt="Wanna write to us?" />
           </h3>
           <br/>
           <Button href="https://www.instagram.com/my_realms_writes/?hl=en" ><i style={{ padding:"20px", color:"#1A3D60",}}  class="fab fa-3x fa-instagram"></i></Button>
           <Button href="https://www.instagram.com/my_realms_art/?hl=en" ><i style={{ padding:"20px", color:"#1A3D60",}}  class="fab fa-3x fa-instagram"></i></Button>
           <Button href="https://www.instagram.com/my_realms_clicks/?hl=en" ><i style={{ padding:"20px", color:"#1A3D60",}}  class="fab fa-3x fa-instagram"></i></Button>
           <Button href="https://www.facebook.com/my_realms-926172701062222/" ><i style={{ padding:"20px", color:"#1A3D60",}}  class="fab fa-3x fa-facebook-f"></i></Button>
           <Button href="https://www.linkedin.com/in/my-realms/" ><i style={{ padding:"20px", color:"#1A3D60",}}  class="fab fa-3x fa-linkedin"></i></Button>
           </div>
           </div>
           <Apbar/>

       </main>
       <footer className="footer">
       <p>&copy; My Realms {d} All rights reserved</p>
       </footer>
     </div>
     </>
   )
 }
