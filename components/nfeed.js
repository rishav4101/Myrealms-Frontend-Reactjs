import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import CommentRoundedIcon from "@material-ui/icons/CommentRounded";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  media: {
    maxWidth: 320,
    height: 320,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  root:{
    margin: "4vh",
      backgroundColor: "rgba(16, 204, 249, 0.05)",
      boxShadow: "0 1px 15px rgba(11, 139, 210, 0.12)",
      transition: "0.4s",
      
   
    "&:hover":{
      transform: "scale(1.03)",
      backgroundColor: "rgba(16, 204, 249, 0.05)",
      boxShadow:" 0 1px 40px rgba(249, 102, 118, 0.15)",
    },
    "@media screen and (max-width: 500px)": {
      margin:" 0 0 5px",
    },
    "@media screen and (max-width: 1300px)": {
      maxWidth: "320px",
    },
  },
 
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      style={{backgroundColor: "#f1fafe"}}
      className={classes.root}

    >
      <Grid container justify="center" alignItems="center" style={{ flexGrow: 1 }} spacing={0}>
        <Grid item xs={12} md={12} lg={6}>
          <CardMedia
            style={{ position: "relative", width: "320px" }}
            className={classes.media}
            image={props.url}
            title="Paella dish"
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(20px)",
                color: "white",
                position: "absolute",
                bottom: "4px",
                left: "4px",
                padding: "9px 6px",
                width: "200px",
              }}
            >
              <AccountCircleRoundedIcon
                style={{ float: "left", fontSize: "40px", marginRight: "5px" }}
              />
              <p style={{ marginBottom: "3px" }}>
                <em>{props.name}</em>
              </p>
              <p style={{ fontSize: "10px", marginBottom: "0" }}>
                @my_realms_art<span>&#x2022;</span>
                {props.time}
              </p>
            </div>
          </CardMedia>
        </Grid>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          item
          md={12}
          lg={6}
        >
          <CardContent style={{ color: "#777",}}>
            <p className="fp">{props.caption}</p>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              maxWidth: 320,
            }}
            disableSpacing
          >
            <IconButton
              style={{ outline: "none", color: "#ED125B" }}
              aria-label="add to favorites"
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              style={{ outline: "none", color: "#ED125B" }}
              aria-label="comment"
            >
              <CommentRoundedIcon />
            </IconButton>
            <IconButton
              style={{ outline: "none", color: "#ED125B" }}
              aria-label="share"
            >
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
