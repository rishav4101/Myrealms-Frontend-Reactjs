import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'

import Link from 'next/link'
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';


export default function menuLI(props){
  return(
    <ListItem href="/about" button={true} key={props.name}>

    <Icon style={{marginRight:"35px", color:"#644154" }} >{props.icname}</Icon>
  <a href={props.url} style={{textDecoration:"none"}}>  <ListItemText style={{color:"#644154", fontWeight:"500", letterSpacing:"3px", textTransform:"uppercase" }} disableTypography={true} primary={props.name} />
</a>

    </ListItem>
  )
}
