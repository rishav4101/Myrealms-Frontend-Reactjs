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

export default function start() {
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
          <img
            style={{ margin: "40px auto 10px", padding: "0px" }}
            className="vector-2"
            src="/welcome.svg"
          />
          <h1 className="title">
            <img
              style={{ marginTop: "20px", padding: "0" }}
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
              margin: "4vw auto 0",
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
                size="small"
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
              padding: "7px 80px",
            }}
            size="large"
            varient="contained"
          >
            Sign In
          </Button>
          <p
            className="text description"
            style={{
              marginTop: "20px",
              color: "#Ed165a",
              paddingBottom: "5px",
            }}
          >
            I am new here,{" "}
            <a
              href="/signUp"
              style={{
                textDecoration: "none",
                textShadow: "0 4px 10px  #Ed165a",
              }}
            >
              Sign me up
            </a>
          </p>
          <p className="text description" style={{ color: "#Ed165a" }}>
            <a
              href="/signUp"
              style={{
                textDecoration: "none",
                textShadow: "0 4px 10px #Ed165a",
              }}
            >
              Forgot Password
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
