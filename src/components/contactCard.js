import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import theme from '../theme.js'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles({
  root: {
    maxWidth: 100,
    overflowX:"hidden",
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    backgroundColor: "#EEF7FB",
    border: '1px solid black',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline:'none'
  },
});


export default function contactCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <div className="root" >
      <CardActionArea onClick={handleOpen} >
        <img style={{filter: "grayscale(100%)", objectFit:"cover",height:"170px", width:"140px"}} src={props.url} alt=""/>
        <img src="/yl.png" style={{ objectFit:"cover",height:"7px", width:"140px", zIndex:"20", position:"absolute",left:"", top:"12px", left:"-0.01px"}} />
        <div style={{backgroundColor:"#F9A006",width:"140px", zIndex:"20", position:"absolute", bottom:"15px", padding:"0 10px"}}>
         <p  style={{color:"white", margin:"0 0"}} >{props.name}</p>
         <hr style={{border:"0.1px solid white", margin:"0 auto"}} />
         <p style={{color:"white", margin:"2px auto", textAlign:"right"}}>{props.pos}</p>
        </div>
      </CardActionArea>
      <Modal
      style={{fontFamily:"'Century Gothic'"}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">My name</h2>
            <p id="transition-modal-description">Hey there! I'm blah blah. bortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
