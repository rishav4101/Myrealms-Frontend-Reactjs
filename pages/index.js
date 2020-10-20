import Head from "next/head";
import Link from "next/link";
import Icon from "@material-ui/core/Icon";
import Navbar from "../src/components/navBar.js";
import Apbar from "../src/components/appBar.js";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import theme from "../src/theme";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHome from "../src/components/cardHome.js";
import Nfeed from "../src/components/nfeed.js";

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
var d = new Date().getFullYear();

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div className="container">
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          />
          <title>My Realms-Painting the world in the rhythm of word</title>
          <link rel="icon" href="/favicon.ico" />
          //{" "}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main className="main">
          <Navbar />
          <Apbar />

          <h1 className="title">
            <img className="heading" src="/myrH1.png" alt="My realms" />
          </h1>
          <div className="pc">
            <h2 style={{ marginBottom: "30px" }} className="description">
              Painting the world in the rhythm of words
            </h2>
          </div>
          <div>
            <img
              src="/homev-1.png"
              style={{ maxHeight: "50vh", maxWidth: "80vw", margin: "0 auto" }}
            />
          </div>

          <div className={classes.root}>
            <Grid
              container
              direction="row"
              style={{ padding: "5vh 5vw 15vh 5vw" }}
              spacing={1}
            >
              <Grid className="grid" item xs={12}>
                <div className="grid">
                  <p className="description text">
                    Lobortis elementum nibh tellus molestie. Quis eleifend quam
                    adipiscing vitae proin. Volutpat lacus laoreet non curabitur
                    gravida. Nibh venenatis cras sed felis eget velit.Sapien
                    pellentesque habitantmorbi tristique senectus et netus.
                    <br />
                    <br />
                    Dis parturient montes nascetur ridiculus mus. Eget est lorem
                    ipsum dolor sit amet consectetur adipiscing elit.Odio ut
                    enim blandit volutpat maecenas. Sed egestas egestas
                    fringilla phasellus faucibus scelerisque. Suspendisse
                    faucibus interdum posuere lorem.
                  </p>
                  <Button
                    href="/about"
                    style={{
                      textTransform: "uppercase",
                      fontFamily: "Roboto",
                      fontWeight: "300",
                      fontSize: "13px",
                      borderRadius: "200px",
                      backgroundColor: "#FBB591",
                      color: "#71092C",
                      maxWidth: "70vw",
                      minWidth: "20vw",
                      boxShadow: " 0 1px 20px rgba(249, 102, 118, 0.3)",
                      padding: "7px 40px",
                    }}
                    varient="contained"
                  >
                    More about us
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className={classes.root}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
              spacing={5}
            >
              <Grid item xs={12} md={6}>
                <div className="grid">
                  <iframe
                    className="yt"
                    src="https://www.youtube.com/embed/QSgh1v8aUqg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="grid">
                  <div className="testimonial">
                    <img
                      style={{ float: "right" }}
                      className="avatar"
                      src="/avatar-2.jpg"
                      alt="avatar"
                    />
                    <div>
                      <p>
                        Lobortis elementum nibh tellus molestie. Quis eleifend
                        quam adipiscing vitae proin. Volutpat lacus laoreet non
                        curabitur gravida. Nibh venenatis cras sed felis eget
                        velit.{" "}
                      </p>
                      <div className="details">
                        <p>Name Surname</p>
                        <p>Cofounder</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testimonial"
                   
                  >
                    <img
                      className="avatar"
                      style={{ float: "left" }}
                      src="/avatar-3.jpg"
                      alt="avatar"
                    />
                    <div style={{ textAlign: "right" }}>
                      <p>
                        Lobortis elementum nibh tellus molestie. Quis eleifend
                        quam adipiscing vitae proin. Volutpat lacus laoreet non
                        curabitur gravida. Nibh venenatis cras sed felis eget
                        velit.{" "}
                      </p>
                      <div className="details">
                        <p>Name Surname</p>
                        <p>Cofounder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
         
        </main>
        
        <footer className="footer">
          <p>&copy; My Realms {d} All rights reserved</p>
        </footer>
      </div>
    </>
  );
}
