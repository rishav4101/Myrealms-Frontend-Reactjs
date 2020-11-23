import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CarouselT from "../components/carouselTxt.js";
import Team from '../components/team.js';


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
  team:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
  },
  btn : {
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
    transition:"0.3s",
    "&:hover": {
      transform:"scale(1.02)",
      backgroundColor: "#FBB591",
      color: "#71092C",
      boxShadow: " 0 2px 30px rgba(249, 102, 118, 0.3)",
    },
  },
}));

export default function about(props) {
  const classes = useStyles();

  return (
    <>
      <div className="container">
        <main className="main">
          <h3>
            <img className="sub-h" src="/about-h.png" alt="About my realms" />
          </h3>
          <img className="vector-2" src="/team.png" />
          <div
            className="grid"
            style={{ padding: "5vh 5vw 5vh 5vw", backgroundColor: "rgba(16, 204, 249, 0.05)", minWidth:"100vw" }}
          >
            <p
              className="description text"
              style={{ textAlign: "left", padding: "10px" }}
            >
              Lobortis elementum nibh tellus molestie. Quis eleifend quam
              adipiscing vitae proin. Volutpat lacus laoreet non curabitur
              gravida. Nibh venenatis cras sed felis eget velit.Sapien
              pellentesque habitantmorbi tristique senectus et netus.
              <br />
              <br />
              Lobortis elementum nibh tellus molestie. Quis eleifend quam
              adipiscing vitae proin. Volutpat lacus laoreet non curabitur
              gravida. Nibh venenatis cras sed felis eget velit. Sapien
              pellentesque habitant morbi tristique senectus et netus. Dis
              parturient montes nascetur ridiculus mus. Eget est lorem ipsum
              dolor sit amet consectetur adipiscing elit. Odio ut enim blandit
              volutpat maecenas. Sed egestas egestas fringilla phasellus
              faucibus scelerisque. Suspendisse faucibus interdum posuere lorem.
            </p>
          </div>
          <h3>
            <img
              className="sub-sh"
              style={{ marginTop: "80px" }}
              src="/wdts.png"
              alt="Wanna join us?"
            />
          </h3>

          <CarouselT className="grid" />

          <h3>
            <img
              className="sub-sh"
              style={{ marginTop: "80px", marginBottom: "0px" }}
              src="/teamh.png"
              alt="Meet our team"
            />
          </h3>
          <div className="" style={{ padding: "0 5vw 5vh 5vw" }}>
            <p
              className="description text"
              style={{ textAlign: "left", padding: "10px" }}
            >
              Lobortis elementum nibh tellus molestie. Quis eleifend quam
              adipiscing vitae proin. Volutpat lacus laoreet non curabitur
              gravida. Nibh venenatis cras sed felis eget velit.Sapien
              pellentesque habitantmorbi tristique senectus et netus.
            </p>
          </div>
<section className={classes.team} >
<Team  />
</section>
         

          <h3>
            <img
              className="sub-sh"
              style={{ marginTop: "60px", marginBottom: "0px" }}
              src="/wjs.png"
              alt="Wanna join us?"
            />
          </h3>
          <div style={{ padding: "0 5vw 0 5vw" }}>
            <p
              className="description text"
              style={{ textAlign: "center", padding: "10px" }}
            >
              Lobortis elementum nibh tellus molestie. Quis eleifend quam
              adipiscing vitae proin. Volutpat lacus laoreet non curabitur
              gravida. Nibh venenatis cras sed felis eget velit.Sapien
              pellentesque habitantmorbi tristique senectus et netus.
            </p>
            <p
              className="description text"
              style={{ textAlign: "center", padding: "10px" }}
            >
              We're more than glad to welcome new members to our community.
            </p>
          </div>
          <Button
                  className={classes.btn}
                    href="/about"
                  
                    varient="contained"
                  >
                    Join 
                  </Button>
        </main>
      </div>
    </>
  );
}
