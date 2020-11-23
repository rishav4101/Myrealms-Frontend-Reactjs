import Head from 'next/head';
import Navbar from '../src/components/navBar';
import Apbar from '../src/components/appbar.js';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyChip from '../src/components/chip.js';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import DrCard from '../src/components/drCard.js';

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
var d= new Date().getFullYear();

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
    <Head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
        <title>My Realms-Painting the world in the rhythm of word/discover</title>
        <link rel="icon" href="/favicon.ico" />
        // <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>


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


      <Navbar />
      <Apbar/>

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
                        col="#774D03"
                        url="url(/post/26.png)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="𝑬𝒗𝒆𝒓𝒚 𝒑𝒐𝒓𝒕𝒓𝒂𝒊𝒕 𝒕𝒉𝒂𝒕 𝒊𝒔 𝒑𝒂𝒊𝒏𝒕𝒆𝒅 𝒘𝒊𝒕𝒉 𝒇𝒆𝒆𝒍𝒊𝒏𝒈 𝒊𝒔 𝒂 𝒑𝒐𝒓𝒕𝒓𝒂𝒊𝒕 𝒐𝒇 𝒕𝒉𝒆 𝒂𝒓𝒕𝒊𝒔𝒕, 𝒏𝒐𝒕 𝒐𝒇 𝒕𝒉𝒆 𝒔𝒊𝒕𝒕𝒆𝒓. 𝑻𝒉𝒆 𝒔𝒊𝒕𝒕𝒆𝒓 𝒊𝒔 𝒎𝒆𝒓𝒆𝒍𝒚 𝒕𝒉𝒆 𝒂𝒄𝒄𝒊𝒅𝒆𝒏𝒕, 𝒕𝒉𝒆 𝒐𝒄𝒄𝒂𝒔𝒊𝒐𝒏. 𝑰𝒕 𝒊𝒔 𝒏𝒐𝒕 𝒉𝒆 𝒘𝒉𝒐 𝒊𝒔 𝒓𝒆𝒗𝒆𝒂𝒍𝒆𝒅 𝒃𝒚 𝒕𝒉𝒆 𝒑𝒂𝒊𝒏𝒕𝒆𝒓; 𝒊𝒕 𝒊𝒔 𝒓𝒂𝒕𝒉𝒆𝒓 𝒕𝒉𝒆 𝒑𝒂𝒊𝒏𝒕𝒆𝒓 𝒘𝒉𝒐, 𝒐𝒏 𝒕𝒉𝒆 𝒄𝒐𝒍𝒐𝒖𝒓𝒆𝒅 𝒄𝒂𝒏𝒗𝒂𝒔, 𝒓𝒆𝒗𝒆𝒂𝒍𝒔 𝒊𝒕𝒔𝒆𝒍𝒇. "
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <DrCard
                        col="#72092C"
                        url="url(/post/25.jpeg)"
                        name="Author"
                        date="dd/mm/yy"
                        caption="Man is not what he thinks he is, he is what he hides."
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
