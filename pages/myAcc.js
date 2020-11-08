import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
  const [currency, setCurrency] = React.useState("None");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <div className="container">
        <main className="main">
          <h1 className="title">
            <img className="heading" src="/myrH1.png" alt="My realms" />
          </h1>
          <div>
            {/* Callback for pic preview-dp */}
            {function readURL(input) {
              if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                  $("#blah").attr("src", e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
              }
            }}
            {/* Callback for pic preview */}
            <input type="file" onChange="{readURL(this)} " />
            <img
              id="blah"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
              alt="your image"
            />

            {/* <label htmlFor="upload-photo">
  <input
    style={{ display: 'none' }}
    id="upload-photo"
    name="upload-photo"
    type="file"
    onchange="readURL(this);"
  />
<Fab style={{position:"static", marginLeft:"50%", marginTop:"20px", transform:"translateX(-50%)"}} color="primary" size="small" component="span" aria-label="add">
    <AddIcon/>
  </Fab>
</label> */}
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justify: "center",
              }}
            >
              <TextField
                style={{ marginTop: "20px" }}
                id="standard-basic"
                label="Name"
              />
              <br />
              <TextField
                style={{ marginTop: "20px" }}
                id="standard-basic"
                label="Bio"
              />
              <br />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
