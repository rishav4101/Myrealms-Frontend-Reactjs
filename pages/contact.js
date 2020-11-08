import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div className="container">
        <main className="main">
          <h1 className="title">
            <img
              style={{ marginBottom: "3vw", paddingTop: "3vw" }}
              className="heading"
              src="/git.png"
              alt="Get in touch"
            />
          </h1>
          <img
            style={{ marginBottom: "3vw" }}
            className="vector-2"
            src="/contact.svg"
          />
          
{/* form */}
<Grid container spacing={"3"}>
  <Grid item sm={12} lg={6}>
  <h3>
  Write to us
          </h3>
          <div
            style={{
              borderRadius: "10px",
              width: "100%",
              minHeight:"70%",
              backgroundColor: "#EEF7FB",
              padding: "10vw",
            }}
          >
            <form>
              <div className="form-group ">
                <input
                  style={{
                    marginBottom: "4vw",
                    background: "transparent",
                    border: "1px solid #1A3D60",
                  }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
                <input
                  style={{
                    marginBottom: "4vw",
                    background: "transparent",
                    border: "1px solid #1A3D60",
                  }}
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your email"
                />
                <textarea
                  style={{
                    marginBottom: "4vw",
                    background: "transparent",
                    border: "1px solid #1A3D60",
                  }}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Type your message..."
                  rows="5"
                />
              </div>
              <Button
                className="btn"
                href="mailto:my.realms.44@gmail.com"
                style={{
                  fontFamily: "Century Gothic",

                  borderRadius: "5px",
                  backgroundColor: "#1A3D60",
                  color: "#d1e9f5",
                }}
                fullWidth={true}
                size="large"
                varient="contained"
              >
                Send
              </Button>
            </form>
          </div>
  </Grid>
  <Grid item sm={12} lg={6}>
   
  <div
            className="contact"
            style={{ borderRadius: "10px", backgroundColor: "#EEF7FB" }}
          >
            <div style={{ textAlign: "center" }} className="form-group">
              <p style={{ fontSize: "20px" }}>
                <Icon
                  style={{
                    fontSize: 30,
                    overflow: "visible",
                    padding: "20px 40px 20px 0",
                    color: "#1A3D60",
                  }}
                >
                  phone_in_talk
                </Icon>
                9876543210
              </p>
              <p style={{ fontSize: "20px" }}>
                <i
                  style={{ padding: "20px 10px", color: "#1A3D60" }}
                  class="fab fa-2x fa-whatsapp"
                ></i>
                7894560321
              </p>
              <br />
              <h3>
                <img
                  className="sub-sh"
                  style={{ marginTop: "30px" }}
                  src="/vopn2.png"
                  alt="Wanna write to us?"
                />
              </h3>
              <br />
              <Button href="https://www.instagram.com/my_realms_writes/?hl=en">
                <i
                  style={{ padding: "20px", color: "#1A3D60" }}
                  class="fab fa-3x fa-instagram"
                ></i>
              </Button>
              <Button href="https://www.instagram.com/my_realms_art/?hl=en">
                <i
                  style={{ padding: "20px", color: "#1A3D60" }}
                  class="fab fa-3x fa-instagram"
                ></i>
              </Button>
              <Button href="https://www.instagram.com/my_realms_clicks/?hl=en">
                <i
                  style={{ padding: "20px", color: "#1A3D60" }}
                  class="fab fa-3x fa-instagram"
                ></i>
              </Button>
              <Button href="https://www.facebook.com/my_realms-926172701062222/">
                <i
                  style={{ padding: "20px", color: "#1A3D60" }}
                  class="fab fa-3x fa-facebook-f"
                ></i>
              </Button>
              <Button href="https://www.linkedin.com/in/my-realms/">
                <i
                  style={{ padding: "20px", color: "#1A3D60" }}
                  class="fab fa-3x fa-linkedin"
                ></i>
              </Button>
            </div>
          </div>
  </Grid>
  </Grid>
        
        </main>
      </div>
    </>
  );
}
