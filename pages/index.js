import Head from "next/head";
import Navbar from "../src/components/navBar";
import Apbar from "../src/components/appbar.js";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
  btn: {
    textTransform: "uppercase",
    fontFamily: "Roboto",
    fontWeight: "300",
    fontSize: "13px",
    borderRadius: "200px",
    backgroundColor: "#FBB591",
    color: "#71092C",
    maxWidth: "70vw",
    minWidth: "20vw",
    boxShadow: " 0 1px 10px rgba(249, 102, 118, 0.5)",
    padding: "7px 40px",
    transition: "0.3s",

    "&:hover": {
      transform: "scale(1.02)",
      backgroundColor: "#FBB591",
      color: "#71092C",
      boxShadow: " 0 2px 30px rgba(249, 102, 118, 0.3)",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fetchedStatus = useTypedSelector((state) => state.display.status);

  React.useEffect(() => {
    dispatch({
      type: "FETCH_STATUS",
    });
  }, []);

  console.log(fetchedStatus);

  return (
    <>
      <div className="container">
        <main className="main">
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
                    className={classes.btn}
                    href="/about"
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
                        velit.
                      </p>
                      <div className="details">
                        <p>Name Surname</p>
                        <p>Cofounder</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial">
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
      </div>
    </>
  );
}
