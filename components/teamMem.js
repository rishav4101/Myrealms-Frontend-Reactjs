import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
// rgba(196, 206, 206,0.3)
const useStyles = makeStyles({
  root: {
      marginRight:"0",
    boxShadow: " 0 1px 5px rgba(196, 206, 206,0.3)",
    padding: "20px 5px",
    width: "250px",
    height: "300px",
    overflow: "hidden",
    backgroundColor: "#FCFCFA",
    borderRadius: "5px",
    transition:"0.3s",
    "&:hover":{
        transform:"scale(1.03)",
        backgroundColor: "#FCFCFA",
        boxShadow: " 0 1px 45px rgba(196, 206, 206,0.35)",
    },
    "@media screen and (max-width: 500px)": {
      width: "140px",
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
          
          <Grid container justify="center">
          <IconButton style={{color:"rgba(251, 181, 145, 0.7)", outline:"none"}} href={props.fb}>
              <FacebookIcon fontSize="small"/>
          </IconButton>
          <IconButton style={{color:"rgba(251, 181, 145, 0.7)", outline:"none"}} href={props.li}>
              <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton style={{color:"rgba(251, 181, 145, 0.7)", outline:"none"}} href={props.ig}>
              <InstagramIcon fontSize="small" />
          </IconButton>
          </Grid>
    </div>
  );
}
