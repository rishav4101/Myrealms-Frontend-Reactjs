import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius:"40px",
    backgroundImage:"linear-gradient(to right bottom, #BFDEED, white)"
  },
});


export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.name}
          height="240"
          image={props.url}
          title={props.name}

        />
      </CardActionArea>
      <CardActions>
      <div style={{minHeight:"50px"}} ></div>
      </CardActions>
    </Card>
  );
}
