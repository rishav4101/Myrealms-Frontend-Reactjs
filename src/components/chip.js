import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';



export default function myChip(props){


      const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };

      const handleClick = () => {
        console.info('You clicked the Chip.');
      };

  var a=props.name.substring(0,1)
  return (
    <Chip
    style={{
      padding:"2px 7px",
      fontFamily:"Century Gothic",
      fontSize:"16px",
      letterSpacing:"1px",
      backgroundColor:props.color
    }}
    size="medium"
    label={props.name}
    onClick={handleClick} />

  )
}
