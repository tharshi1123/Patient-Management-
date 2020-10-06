import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import  ContainedButtons from '../../Components/Core/Button.js'

const useStyles = makeStyles((theme) => ({
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    MaxWidth: "241px",
    MaxHeight: "260px",
    width:'100%'
  },
 main: {
    maxWidth: "400px",
    background: " #FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: " 0px 12px 32px #383B470F",
    borderRadius: "12px",
    opacity: "1",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "26px",
    width:'100%'
  },
  button: {
    margin: theme.spacing(1),
  },
  text: {
    textAlign: 'center',
    letterSpacing: '0px',
    color: 'black',
    textTransform: 'uppercase',
    opacity: '1',
    marginTop:'6px'
  },
title: {
    textAlign: 'center',
    color: '#201F1F',
    opacity: '1',
  },
  text2:{
   height: '23px',
   textAlign: 'center',
   color: '#FF2222',
   textTransform: 'uppercase',
   opacity: '1',
  },
  buttonset:{
display:'flex',
flexDirection:'row'
  },
  description:{
[theme.breakpoints.down('sm')]: {
 margin:'0'
      }
  }
}));

const PatientCard = (props) => {
  const classes = useStyles(props);
  const { image, title, pressure, heartbeat,bedno,oxygen,respiration,temperature} = props.data;

  return (
    <div className={classes.main}>
     <div>
      <img src={image} alt="logo" className={classes.image} />
      </div>
      <div>
        <div className={classes.description} variant="h5">
        <Typography className={classes.title} variant="h5">
       Bed No: {bedno}
      </Typography>
      <Typography className={classes.title} variant="h5">
       Name: {title}
      </Typography>
      <Typography className={classes.text} variant="subtitle1">
        Pressure:{pressure}
      </Typography>
      <Typography className={classes.text} variant="subtitle1">
        Oxygen Saturation:{oxygen}
      </Typography>
      <Typography className={classes.text} variant="subtitle1">
      Respiration:{respiration}
      </Typography>
      <Typography className={classes.text} variant="subtitle1">
      Temperature:{temperature}
      </Typography>
      </div>
      <Typography className={classes.text} variant="subtitle1">
       Heart Beat: {heartbeat}
      </Typography>
<div className={classes.buttonset}>   
      <ContainedButtons button='set' href='/model'></ContainedButtons>
      <ContainedButtons button='remove' href='/model'></ContainedButtons>
</div>
  

      </div>
    </div>
  );
};

export default PatientCard;