import React from 'react';
    import PropTypes from 'prop-types';
    import { withStyles } from '@material-ui/core/styles';
    import MobileStepper from '@material-ui/core/MobileStepper';
    import Paper from '@material-ui/core/Paper';
    import Typography from '@material-ui/core/Typography';
    import Button from '@material-ui/core/Button';
    import IconButton from '@material-ui/core/IconButton';

    import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
    import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
    import SwipeableViews from 'react-swipeable-views';
    import { autoPlay } from 'react-swipeable-views-utils';

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const tutorialSteps = [
      {
        content:
      "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
    author: "John Blake",
    source: "Google+"
      },
      {
        content:
      "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
    author: "Alfred Pennyworth",
    source: "twitter"
      },
      {
   content:
     "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
   author: "Bane",
   source: "facebook"
 }, {
   content:
     "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
   author: "Ra's Al Ghul",
   source: "Snapchat"
 }, {
   content:
     "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
   author: "Joker",
   source: "facebook"
 }, {
   content:
     "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
   author: "Bruce Wayne",
   source: "facebook"
 }, {
   content:
     "But it's not who you are underneath... it's what you do that defines you.",
   author: "Rachel Dawes",
   source: "twitter"
 },
    ];

    const styles = theme => ({
      root: {
        maxWidth: "100vw",
        flexGrow: 1,
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
      },

    });

    class SwipeableTextMobileStepper extends React.Component {
      state = {
        activeStep: 0,
      };

      handleNext = () => {
        this.setState(prevState => ({
          activeStep: prevState.activeStep + 1,
        }));
      };

      handleBack = () => {
        this.setState(prevState => ({
          activeStep: prevState.activeStep - 1,
        }));
      };

      handleStepChange = activeStep => {
        this.setState({ activeStep });
      };

      render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = tutorialSteps.length;
    return (
      <div className={classes.root}>

        <AutoPlaySwipeableViews className=""
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div  className="testCar"  style={{textAlign:"center", margin:"0 auto"}}  key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
               <div>
                <p className="fp" style={{  fontFamily: "'Playfair Display', serif"}} >{step.content}</p>
                <br/>
                <p><strong>{step.author}, </strong><em>{step.source}</em></p>
                </div>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
        style={{color:"red", background:"transparent"}}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <IconButton  style={{color:"red", marginRight:"20px"}} size="large" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>

              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
          }
          backButton={
            <IconButton style={{color:"red", marginLeft:"20px"}} size="large" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}

            </IconButton>
          }
        />
      </div>
    );
  }
}
SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);
