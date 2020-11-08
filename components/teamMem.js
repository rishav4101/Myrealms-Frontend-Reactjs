import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  root: {
      marginRight:"0",
    boxShadow: " 0 1px 5px rgba(196, 206, 206,0.2)",
    padding: "20px 5px",
    width: "250px",
    height: "300px",
    overflow: "hidden",
    backgroundColor: "#FCFCFA",
    borderRadius: "2px",
    transition:"0.3s",
    "&:hover":{
        backgroundColor: "#FCFCFA",
        boxShadow: " 0 1px 25px rgba(196, 206, 206,0.3)",
    },
    "@media screen and (max-width: 500px)": {
      width: "130px",
      height: "180px",
    },
  },
  avatar: {
      overflowX:"hidden",
    height: 150,
    width: 150,
    borderRadius: "100%",
    margin: "0 50%",
    transform: "translateX(-50%)",
    objectPosition: "top",
    objectFit: "cover",
    "@media screen and (max-width: 500px)": {
        width: "100px",
        height: "100px",
      },
  },
  name: {
    fontSize: "14px",
    color: "#313639",
    "@media screen and (max-width: 500px)": {
      fontSize: "11px",
    },
  },
  post: {
    color: "#A5A5A5",
    fontSize: "12px",
    "@media screen and (max-width: 500px)": {
      fontSize: "9px",
    },
  },
});

export default function teamM(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <img src={props.url} className={classes.avatar} />
          <p
            style={{ margin: "5px auto 0", textAlign: "center" }}
            className={classes.name}
          >
            {props.name}
          </p>
          <em>
            <p
              style={{ marginTop: "0", textAlign: "center" }}
              className={classes.post}
            >
              {props.post}
            </p>
          </em>
          <br/>
          <Grid container justify="center">
          <IconButton style={{color:"rgba(249, 102, 118, 0.5)", outline:"none"}} href={props.fb}>
              <FacebookIcon/>
          </IconButton>
          <IconButton style={{color:"rgba(249, 102, 118, 0.5)", outline:"none"}} href={props.li}>
              <LinkedInIcon/>
          </IconButton>
          <IconButton style={{color:"rgba(249, 102, 118, 0.5)", outline:"none"}} href={props.ig}>
              <InstagramIcon/>
          </IconButton>
          </Grid>
    </div>
  );
}
