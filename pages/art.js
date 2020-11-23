import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Nfeed from "../components/nfeed.js";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 20px",
  },
  bg: {
    boxShadow: " 0 1px 10px rgba(196, 206, 206,0.4)",
    backgroundColor: "#f5f5f4",
    borderRadius: "2px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  head: {
    marginTop: "1vw",
    marginBottom: "1vw",
    paddingTop: "1vw",
    display: "block",
    margin: "10vh auto 4vh",
    width: "200px",
    "@media screen and (max-width: 700px)": {
      marginLeft: "auto",
      marginRight: "auto",
      width: "100px",
    },
  },
}));

export default function art() {
  const classes = useStyles();
  return (
    <>
      <div style={{ minWidth: "90vw" }} className="container">
        <main className="main">
          <h1 className="title">
            <img className={classes.head} src="/arth.png" alt="Get in touch" />
          </h1>
          {/* <img
            style={{ marginBottom: "5vw", paddingBottom: "100px" }}
            className="vector-2"
            src="/art_vector.svg"
          /> */}
          <Grid
            className={classes.bg}
            justify="center"
            alignItems="center"
            container
          >
            <Grid className={classes.center} item xs={12} sm={6} md={4} lg={6}>
              <Nfeed
                className={classes.shadow}
                name="Name Surname"
                time="55s"
                caption="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                url="/post/22.jpeg"
              />
            </Grid>
            <Grid className={classes.center} item xs={12} sm={6} md={4} lg={6}>
              <Nfeed
                name="Name Surname"
                time="5d"
                caption="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                url="/post/19.jpeg"
              />
            </Grid>
            <Grid className={classes.center} item xs={12} sm={6} md={4} lg={6}>
              <Nfeed
                name="Name Surname"
                time="24m"
                caption="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                url="/post/24.jpeg"
              />
            </Grid>
            <Grid className={classes.center} item xs={12} sm={6} md={4} lg={6}>
              <Nfeed
                name="Name Surname"
                time="14h"
                caption="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                url="/post/17.jpeg"
              />
            </Grid>
          </Grid>
        </main>
      </div>
    </>
  );
}
