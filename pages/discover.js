import Layout from '../src/components/Layout.js'
import Head from 'next/head'
import Link from 'next/link'
import Icon from '@material-ui/core/Icon'
import Navbar from '../src/components/navBar.js'
import Apbar from '../src/components/appBar.js'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import theme from '../src/theme';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHome from '../src/components/cardHome.js'
import CardActionArea from '@material-ui/core/CardActionArea';
import ContactCard from '../src/components/contactCard.js'
import { Slide } from 'material-auto-rotating-carousel';
import { red, blue, green } from'@material-ui/core/colors'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import CarouselT from '../src/components/carouselTxt.js'
import MyChip from '../src/components/chip.js'
import LocationOn from "@material-ui/icons/LocationOn";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import DrCard from '../src/components/drCard.js'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <p className="text description" >{children}</p>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const pics = [
  {
    url:"/post/14.jpeg"
  },
  {
    url:"/post/11.jpeg"
  },
  {
    url:"/post/13.jpeg"
  },
  {
    url:"/post/15.jpeg"
  },
  {
    url:"/post/17.jpeg"
  },
  {
    url:"/post/20.jpeg"
  },
  {
    url:"/post/15.jpeg"
  },

];



const useStyles = makeStyles((theme, carouselStyle) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  }
));

export default function discover() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  const classes = useStyles();

  return (
    <>
    <div className="container">
   


      <main className="main" style={{marginTop:"0"}}>


<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style={{width:"100vw"}} >
    <div class="carousel-item active">
      <img class="d-block w-100" src="/explore.png" alt="First slide"/>

    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src="/dd2.png" alt="Second slide"/>
  </div>
  <div class="carousel-item ">
    <img class="d-block w-100" src="/d3.png" alt="Third slide"/>
  </div>
  <a style={{zIndex:"20"}} class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a style={{zIndex:"20"}} class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
<div style={{width:"110vw",position:"absolute", top:"0", backgroundColor:"rgba(0,0,0,0.65)"}} >
<img className="disc" style={{ margin:"21.5vw auto ",}} src="/disc2.png" alt="About my realms" />
</div>



<div style={{paddingTop:"5vh", margin:"20px 5vw", justifyContent:"left"}} className={classes.root}>
  <MyChip name="Poems" color="#FDE7EB" />
  <MyChip name="Aesthetic" color="#FEF9E7" />
  <MyChip name="Inspirational" color="#EDEAFA" />
  <MyChip name="Vector Art" color="#FDE7EB" />
  <MyChip name="Nature" color="#FEF9E7" />
  <MyChip name="sketches" color="#EDEAFA" />
  <MyChip name="B & W" color="#FDE7EB" />
  <MyChip name="portraits" color="#FEF9E7" />
  <MyChip name="Poems" color="#FDE7EB" />
  <MyChip name="Aesthetic" color="#FEF9E7" />

</div>

      <div style={{ width:"100%", boxShadow:"none"}} className={classes.root}>
        <AppBar style={{ background:"transparent", boxShadow:"none", zIndex:"100"}} position="static" color="default">
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab style={{outline:"none", fontFamily:"Century Gothic", fontSize:"15px"}}  {...a11yProps(0)} label="Recent" />
            <Tab style={{outline:"none", fontFamily:"Century Gothic", fontSize:"15px"}}  label="Popular" {...a11yProps(1)} />
            <Tab style={{outline:"none", fontFamily:"Century Gothic", fontSize:"15px"}}  label="Editor's Choice" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel style={{overflowX:"hidden"}} value={value} index={0} dir={theme.direction}>

          <Grid container justify="center" alignItems="center" spacing={10}>
            <Grid item xs={12}>
              <DrCard
              col="#72092C"
              url="url(/post/2.jpeg)"
              name="Author"
              date="dd/mm/yy"
              caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
              />
            </Grid>
            <Grid item xs={12}>
              <DrCard
              col="#251764"
              url="url(/post/7.jpeg)"
              name="Author"
              date="dd/mm/yy"
              caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
              />
            </Grid>
            <Grid item xs={12} >
              <DrCard
              col="#774D03"
              url="url(/post/18.jpeg)"
              name="Author"
              date="dd/mm/yy"
              caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
              />
            </Grid>
            <Grid item xs={12}>
              <DrCard
              col="#72092C"
              url="url(/post/5.jpeg)"
              name="Author"
              date="dd/mm/yy"
              caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
              />
            </Grid>
            <Grid item xs={12} >
              <DrCard
              col="#251764"
              url="url(/post/16.jpeg)"
              name="Author"
              date="dd/mm/yy"
              caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
              />
            </Grid>
            <Grid item xs={12} >
              <DrCard
              col="#774D03"
              url="url(/post/22.jpeg)"
              name="Author"
              date="dd/mm/yy"
              caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
              />
            </Grid>
            <Grid item xs={12}>
              <DrCard
              col="#72092C"
              url="url(/post/12.jpeg)"
              name="Author"
              date="dd/mm/yy"
              caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
              />
            </Grid>
            <Grid item xs={12} >
              <DrCard
              col="#251764"
              url="url(/post/15.jpeg)"
              name="Author"
              date="dd/mm/yy"
              caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
              />
            </Grid>

          </Grid>

          </TabPanel>
          <TabPanel style={{overflowX:"hidden"}} value={value} index={1} dir={theme.direction}>

                    <Grid container spacing={8}>
                      <Grid item xs={12} >
                        <DrCard
                        col="#774D03"
                        url="url(/post/24.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <DrCard
                        col="#72092C"
                        url="url(/post/15.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <DrCard
                        col="#251764"
                        url="url(/post/1.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <DrCard
                        col="#774D03"
                        url="url(/post/5.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12}  >
                        <DrCard
                        col="#72092C"
                        url="url(/post/4.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <DrCard
                        col="#251764"
                        url="url(/post/2.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <DrCard
                        col="#774D03"
                        url="url(/post/19.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12}  >
                        <DrCard
                        col="#72092C"
                        url="url(/post/4.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                    </Grid>
                     </TabPanel>
          <TabPanel style={{overflowX:"hidden"}} value={value} index={2} dir={theme.direction}>

                    <Grid container spacing={8}>
                      <Grid item xs={12} >
                        <DrCard
                        col="#251764"
                        url="url(/post/23.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <DrCard
                        col="#774D03"
                        url="url(/post/13.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <DrCard
                        col="#72092C"
                        url="url(/post/3.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12}  >
                        <DrCard
                        col="#251764"
                        url="url(/post/5.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12}  >
                        <DrCard
                        col="#774D03"
                        url="url(/post/11.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <DrCard
                        col="#72092C"
                        url="url(/post/20.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <DrCard
                        col="#251764"
                        url="url(/post/19.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <DrCard
                        col="#774D03"
                        url="url(/post/17.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Lobortis elementum nibh tellus molestie. Quis eleifend quam adipiscing vitae proin. Volutpat lacus laoreet non curabitur gravida. Nibh venenatis cras sed felis eget velit."
                        />
                      </Grid>
                    </Grid>
                    </TabPanel>
        </SwipeableViews>
      </div>


            </main>

            <footer className="footer">
              <p>&copy; My Realms {d} All rights reserved</p>
            </footer>
          </div>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

          </>
        );
      }
