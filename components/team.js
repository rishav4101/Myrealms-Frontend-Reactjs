import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Mem from "./teamMem.js";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    margin: "20px 20px 0 0",
    boxShadow: " 0 1px 10px rgba(196, 206, 206,0.4)",
    padding: "20px 50px",
    maxWidth: "75%",
    overflow: "hidden",
    backgroundColor: "#FCFCFA",
    borderRadius: "2px",
    "@media screen and (max-width: 700px)": {
      margin: "20px 0",
      maxWidth: "95%",
      padding: "7px 1px",
    },
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: "100%",
    margin: "0 50%",
    transform: "translateX(-50%)",
    objectPosition: "bottom",
    objectFit: "cover",
  },
});

export default function teamM(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <h3
        style={{
          fontFamily: "Playfair Display",
          textAlign: "center",
          color: "#313639",
          margin: "10px auto",
        }}
      >
        Content Creation
      </h3> */}
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem 
           url="/team/rishav.jpeg"
           name="Rishav Rajkumar"
           post="Founder"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/swastik.jpeg"
            name="Swastik Biswas"
            post="Founder"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/mahima d.jpeg"
            name="Mahima Kriti"
            post="Director"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/rohan.jpeg"
            name="Rohan Rao Jhajharia"
            post="Manager"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem url="/team/sakshi.jpeg" 
          name="Sakshi" 
          post="Secretary" 
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/sebontika.jpeg"
            name="Sebontika Bose"
            post="Chair Person"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/aditya.jpeg"
            name="Aditya Mitra"
            post="Chief Marketing Manager"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/pranayan.jpeg"
            name="Pranayan Metiya"
            post="Content Head"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/chitrita.png"
            name="Chitrita Roy"
            post="Art Head"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/sanskar.jpeg"
            name="Sanskar jhajharia"
            post="Writing Head"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/shruti.jpeg"
            name="Shruti Agarwal"
            post="Photography Head"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/anik.jpeg"
            name="Anik Mondal"
            post="Treasurer"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/tanu.jpeg"
            name="Tanushree Bhattacharya"
            post="Co-ordinator"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/ayush.jpeg"
            name="Ayush Chowdhary"
            post="Social Media Manager"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Mem
            url="/team/fahima.jpeg"
            name="Fahima Nahid"
            post="Co-ordinator"
          />
        </Grid>
      </Grid>
    </div>
  );
}
