import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import heroimage from '../../../Assets/Images/patient.jpg'

const useStyles = makeStyles((theme) => ({
  image: {
    width: '700px',
    height: 'auto',
    borderRadius: '10px'
  }
}));

const HeroSetup = (props) => {
  const classes = useStyles(props);

  return (
    <img src={heroimage} alt="logo" className={classes.image} />




  );
}


export default HeroSetup;