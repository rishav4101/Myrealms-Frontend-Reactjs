import Button from "@material-ui/core/Button";
import React from "react";


export default function start() {
  return (
    <>
      <div className="container">
        <main className="main">
          <h1
            className="title"
            style={{ marginTop: "10vh", marginBottom: "0" }}
          >
            <img className="heading" src="/ht3.png" alt="Hello There!" />
          </h1>
          <h2
            style={{ marginTop: "0", marginBottom: "0" }}
            className="b-margin subt"
          >
            Welcome to my Realms
          </h2>
          <h2 style={{ margin: "15vh auto 20px" }} className="b-margin subt">
            I'm coming back,
          </h2>
          <Button
            href="/signIn"
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
              padding: "7px 50px",
            }}
            varient="contained"
          >
            Sign Me In
          </Button>
          <h2 style={{ margin: "20px auto" }} className="b-margin subt">
            I'm new here,
          </h2>
          <Button
            href="signUp"
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
              padding: "7px 50px",
            }}
            varient="contained"
          >
            Sign Me Up
          </Button>
        </main>
      </div>
    </>
  );
}
