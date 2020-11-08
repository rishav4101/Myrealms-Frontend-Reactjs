import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Nfeed from "../components/nfeed.js";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function writes() {
  const classes = useStyles();
  return (
    <div style={{minWidth:"90vw"}} className="container">
    <main className="main">
      <h1 className="title">
        <img
          style={{ marginBottom: "5vw" }}
          className="sub-h"
          src="/clicksh.png"
          alt="Get in touch"
        />
      </h1>
      <img
        style={{ marginBottom: "5vw", paddingBottom: "100px" }}
        className="vector-2"
        src="/click_v.svg"
      />

      <Grid container>
        <Grid item sm={12} md={6}>
          <Nfeed
            name="Name Surname"
            time="55s"
            caption="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
            url="/post/12.jpeg"
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <Nfeed
            name="Name Surname"
            time="5d"
            caption="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
            url="/post/13.jpeg"
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <Nfeed
            name="Name Surname"
            time="24m"
            caption="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
            url="/post/14.jpeg"
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <Nfeed
            name="Name Surname"
            time="14h"
            caption="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
            url="/post/16.jpeg"
          />
        </Grid>
      </Grid>
    </main>
    </div>
  );
}
