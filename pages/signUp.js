import React from "react";
import {
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#BFDEED",
      borderRadius: "200px",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderRadius: "200px",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#BFDEED",
      borderWidth: 2,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function signUp() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container">
        <main className="main">
          <h1 style={{ marginTop: "50px", padding: "0" }} className="title">
            <img
              style={{ marginTop: "50px", padding: "0" }}
              className="heading"
              src="/myrd.png"
              alt="My realms"
            />
          </h1>
          <div className="pc">
            <h2
              style={{
                color: " rgba(237, 18, 91, 0.6)",
                textAlign: "center",
                marginBottom: "0",
              }}
              className="b-margin subt"
            >
              Painting the world in the rhythm of words
            </h2>
          </div>
          <form
            style={{
              margin: "5vw auto 0",
              flexDirection: "column",
              fontFamily: "Century Gothic",
            }}
            className={classes.root}
            noValidate
          >
            <div>
              <ValidationTextField
                autoFocus
                style={{
                  maxWidth: "70vw",
                  minWidth: "20vw",
                  fontFamily: "Century Gothic",
                  color: " #Ed165a",
                  borderRadius: "200px",
                }}
                className={classes.margin}
                label="My Name "
                required
                variant="outlined"
                id="validation-outlined-input"
                size="small"
              />
            </div>
            <div>
              <ValidationTextField
                autoFocus
                style={{
                  maxWidth: "70vw",
                  minWidth: "20vw",
                  fontFamily: "Century Gothic",
                  color: " #Ed165a",
                  borderRadius: "200px",
                }}
                className={classes.margin}
                label="My Email "
                type="Email"
                required
                variant="outlined"
                id="validation-outlined-input"
                size="small"
              />
            </div>
            <div>
              <ValidationTextField
                style={{
                  maxWidth: "70vw",
                  minWidth: "20vw",
                  fontFamily: "Century Gothic",
                  color: " #Ed165a",
                }}
                className={classes.margin}
                id="outlined-password-input"
                required
                label="My Password"
                autoComplete="current-password"
                variant="outlined"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                size="small"
              />
            </div>
          </form>
          <Button
            href="/"
            className={classes.margin}
            style={{
              textTransform: "uppercase",
              fontFamily: "Century Gothic",
              fontSize: "16px",
              borderRadius: "200px",
              backgroundColor: "#Ed165a",
              color: "#FDE7EB",
              maxWidth: "70vw",
              minWidth: "20vw",
              boxShadow: " 0 4px 10px #BEBEBE",
              padding: "7px 75px",
            }}
            size="large"
            varient="contained"
          >
            Sign Up
          </Button>
          <p
            className="text description"
            style={{
              marginTop: "20px",
              color: "#Ed165a",
              paddingBottom: "5px",
            }}
          >
            I have an account,{" "}
            <a
              href="/signIn"
              style={{
                textDecoration: "none",
                textShadow: "0 4px 10px  #Ed165a",
              }}
            >
              Sign me in
            </a>
          </p>
        </main>

        <footer className="footer">
          <p>&copy; My Realms {d} All rights reserved</p>
        </footer>
      </div>
    </>
  );
}
