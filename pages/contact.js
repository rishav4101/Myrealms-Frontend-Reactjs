import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CallIcon from "@material-ui/icons/Call";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

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
  contact: {
    color: "#A5A5A5",
    fontSize: "14px",
    padding: "30px 0",
    backgroundColor: "#FCFCFA",
    boxShadow: " 0 1px 5px rgba(196, 206, 206,0.35)",
    transition: "0.4s",
    minWidth: "75%",
    "&:hover": {
      backgroundColor: "#FCFCFA",
      boxShadow: " 0 1px 25px rgba(196, 206, 206,0.3)",
    },
    "@media screen and (max-width: 500px)": {
      minWidth: "95%",
    },
  },
  form: {
    marginBottom: "4vw",
    background: "transparent",
    border: "1px solid #1A3D60",
  },
  formbg: {
    // margin: "20px 20px 0 0",
    boxShadow: " 0 1px 10px rgba(196, 206, 206,0.2)",
    // padding: "20px 50px",
    // maxWidth: "75%",
    // overflow: "hidden",
    backgroundColor: "hsla(60, 0%, 96%, 0.5)",
    borderRadius: "2px",
    //   "@media screen and (max-width: 700px)": {
    //     margin: "20px 0",
    //     maxWidth: "95%",
    //     padding: "7px 1px",
    // },
  },
  btn: {
    transform: "translateX(-50%)",
    margin: "0 50%",
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
      backgroundColor: "#FBB591",
      color: "#71092C",
      boxShadow: " 0 2px 30px rgba(249, 102, 118, 0.3)",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className="container">
      <main className="main">
        {/* form */}
        <Grid container justify="center" alignItems="flex-end" spacing={6}>
          <Grid item sm={12} lg={6}>
            <h1 className="title">
              <img
                style={{
                  marginBottom: "2vw 50% 3vw",
                  transform: "translateX(-50%)",
                  paddingTop: "3vw",
                }}
                className="heading"
                src="/git.png"
                alt="Get in touch"
              />
            </h1>
            <img
              style={{ marginBottom: "4vw" }}
              className="vector-2"
              src="/contact.svg"
            />
          </Grid>
          <Grid className={classes.formbg} item sm={12} lg={6}>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "10px",
                fontFamily: "Playfair Display",
              }}
            >
              Write to us
            </h3>
            <div>
              <form>
                <div className="form-group ">
                  <input
                    style={{
                      marginBottom: "2vw",
                      background: "transparent",
                      border: "1px solid rgba(11, 139, 210, 0.15)",
                    }}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your name"
                  />
                  <input
                    style={{
                      marginBottom: "2vw",
                      background: "transparent",
                      border: "1px solid rgba(11, 139, 210, 0.15)",
                    }}
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="City, Country"
                  />
                  <textarea
                    style={{
                      marginBottom: "2vw",
                      background: "transparent",
                      border: "1px solid rgba(11, 139, 210, 0.15)",
                    }}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Type your message..."
                    rows="5"
                  />
                </div>
                <Button
                  className={classes.btn}
                  href="mailto:my.realms.44@gmail.com"
                  size="large"
                  varient="contained"
                >
                  Send
                </Button>
              </form>
            </div>
          </Grid>
          <Grid item sm={12} lg={6}>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "10px",
                fontFamily: "Playfair Display",
              }}
            >
              Contacts
            </h3>

            <div className={classes.contact} style={{ borderRadius: "10px" }}>
              <div
                style={{
                  padding: " 0 5vw",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <p style={{ marginBottom: "0" }}>
                  <IconButton
                    style={{
                      color: "rgba(16, 204, 249, 0.5)",
                      outline: "none",
                    }}
                  >
                    <CallIcon />
                  </IconButton>
                  9876543210
                </p>
                <p style={{ marginBottom: "0" }}>
                  <IconButton
                    style={{
                      color: "rgba(16, 204, 249, 0.5)",
                      outline: "none",
                    }}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                  9876543210
                </p>
                <div>
                  <IconButton
                    style={{
                      color: "rgba(16, 204, 249, 0.5)",
                      outline: "none",
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    style={{
                      color: "rgba(16, 204, 249, 0.5)",
                      outline: "none",
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    style={{
                      color: "rgba(16, 204, 249, 0.5)",
                      outline: "none",
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    style={{
                      color: "rgba(16, 204, 249, 0.5)",
                      outline: "none",
                    }}
                  >
                    <YouTubeIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
