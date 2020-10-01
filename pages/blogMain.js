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
import { makeStyles } from '@material-ui/core/styles';
import CardHome from '../src/components/cardHome.js'
import Nfeed from '../src/components/nfeed.js';
import React from 'react';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DrCard from '../src/components/drCard.js'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 20px",
    width: '100%',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
var d= new Date().getFullYear();

export default function Home() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
  setChecked((prev) => !prev);
  };

  const classes = useStyles();
  return (
    <>
    <div style={{backgroundColor:"#91CDF4", maxWidth:"100vw"}}  className="container">
      <Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
        <title>My Realms-Painting the world in the rhythm of word</title>
        <link rel="icon" href="/favicon.ico" />
        // <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>


      <main className="main" >
    <Navbar />
    <Apbar/>

    <Grid style={{margin:"0", padding:"0"}} container spacing={0}>
            <Grid className="rg" style={{backgroundColor:"#91CDF4",left:"0px", textAlign:"center"}} item sm={12} md={4} >

            <h3 style={{fontFamily: "'Playfair Display', serif", marginTop:"30px"}}><strong>Name of the Blog</strong></h3>
            <hr style={{border:"0.1px solid black",}} />
            <p style={{margin:"40px auto"}}><em> by Author,<br/> image by Photographer Artist</em></p>
            <img className="blog-im" style={{width:"95%", objectPosition:"bottom", objectFit:"cover"}} src="/bm-3.svg" />
             </Grid>
             <Grid className="b-dummy" style={{left:"0px", textAlign:"center"}} item sm={12} md={4} >
              </Grid>



             <Grid sm={12} md={8} item style={{zIndex:"20", padding:"5vw", backgroundColor:"white",textAlign:"center",}}>
             <h1 className="b-head" style={{fontWeight:"bolder", fontFamily: "'Playfair Display', serif",}}>Lorem Ipsum is simply dummy text in the industry and shit. Basically, the best line of the writeup.</h1>
             <div className="b-margin" >
             <p className="b-ar-n" style={{color:"#888",}}><em style={{color:"#555",textTransform:"lowercase", fontWeight:"600"}} >about artist, </em> the Artist</p>
             <hr style={{border:"0.1px solid black",}} />
              <p style={{color:"#777", fontSize:"18px",textAlign:"center",letterSpacing:"1.5px" }}><em>Mr. Mangku Rna and his wife have been producing salt everyday, since 1970, on Kusamba beach. They are amongst the last 14 families that produce salt using this traditional technique.
               </em></p>
             </div>
              <img className="b-margin" src="/Eyeroller.jpg" style={{width:"95%", height:"60vh", objectFit:"cover", objectPosition:"center"}}/ >

             <div className={classes.root}>



       <div className={classes.container}>

         <Collapse className="b-margin" in={checked} collapsedHeight={270}>

            <p className="blog b-ar-n" style={{margin:"0 auto", textAlign:"justify",fontFamily:"Century Gothic",}} >
            Gorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br/>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </p>

         </Collapse>
       </div>
       <FormControlLabel
       style={{fontFamily:"'Century Gothic', serif", margin:"10px auto", color:"#91CDF4", position:"relative", right:"28px"}}
         control={<Switch style={{color:"white"}} checked={checked} onChange={handleChange} />}
         label="Show full article"
       />

     </div>
     <div className="b-margin" >
     <p className="b-ar-n" style={{color:"#888",}}><em style={{color:"#555",textTransform:"lowercase", fontWeight:"600"}} >about Author, </em> the Author</p>
     <hr style={{border:"0.1px solid black",}} />
      <p style={{color:"#777", fontSize:"18px",textAlign:"center",margin:"70px 20px 70px", letterSpacing:"1.5px" }}><em>Mr. Mangku Rna and his wife have been producing salt everyday, since 1970, on Kusamba beach. They are amongst the last 14 families that produce salt using this traditional technique.
       </em></p>
     </div>

     <a style={{textDecoration:"none", outline:"none"}} href="#" ><h6 className="b-ar-n"><em>Share it with your friends!</em></h6></a>
     <hr style={{border:"0.1px solid black", }} />

     <h4 className="b-margin" style={{fontFamily:"'Playfair Display', serif"}}>Read other blogs</h4>
     <Grid style={{marginTop:"5vw"}} container spacing={10}>
     <Grid item sm={12}>
     <DrCard
     col="#72092C"
     url="url(/post/2.jpeg)"
     name="Author"
     date="dd/mm/yy"
     caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
     />
     </Grid>
     <Grid item sm={12}>
     <DrCard
     col="#774D03"
     url="url(/post/17.jpeg)"
     name="Author"
     date="dd/mm/yy"
     caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
     />
     </Grid>
     </Grid>

             </Grid>
          </Grid>







      </main>

      <footer style={{ border:"none", color:"white"}} className="footer">
      <p>&copy; My Realms {d} All rights reserved</p>
      </footer>
    </div>
    </>
  )




}
