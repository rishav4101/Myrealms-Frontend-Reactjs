import Head from 'next/head'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function drCard(props) {
  const matches = useMediaQuery('(max-width:450px)');
  const classes = useStyles();
  var text;
    if (matches) {
      text = props.caption.substring(0, 70);
    }
    else {
          text = props.caption;
    }

  return (
    <>
    <div className={classes.root}>
   <Grid container justify="center" alignItems="center" spacing={3}>
     <Grid className="grid" item xs={6}>
       <div style={{marginRight:"5px",position:"relative",padding:"0", margin:"20px auto 0 auto"}} >
       <div className="bg" style={{backgroundColor:props.col}} ></div>
     <div className="pic" style={{backgroundImage:props.url}} ></div>
       <div className="np">
         <p  style={{fontSize:"16px", marginBottom:"0"}}>{props.name}</p>
         <p><em>{props.date}</em></p>
       </div>
       </div>
     </Grid>
     <Grid item xs={6}>
       <div style={{padding:"0" }} className="drcard-det b-ar-n">
<p style={{fontFamily:"'Playfair Display', serif"}} >{text}</p>
<Button href="/blogMain" style={{outline:"none",textTransform:"uppercase", fontFamily:"Century Gothic",fontSize:"16px",borderRadius:"200px", backgroundColor:"#71092C", color:"#FDE7EB",  }} fullWidth={true} varient="contained" >view</Button>
       </div>
     </Grid>
   </Grid>
 </div>

  </>
  );

}
