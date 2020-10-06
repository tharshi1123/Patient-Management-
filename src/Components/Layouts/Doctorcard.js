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
  text: {
    width: '264px',
    height: '69px',
    textAlign: 'left',
    letterSpacing: '0px',
    color: '#959595',
    opacity: '1',
    marginTop:'6px'
  },
  title: {
    textAlign: 'center',
    color: '#201F1F',
    opacity: '1',
  },
  description:{
    width: '264px',
height: '133px',
[theme.breakpoints.down('sm')]: {
 margin:'0'
      }
  }
}));

const DoctorCard = (props) => {
  const classes = useStyles(props);
  const { image, title, text} = props.data;
  return (
    <div className={classes.main}>
      <div>
      <img src={image} alt="logo" className={classes.image} />
      </div>
      <div>
        <div className={classes.description} variant="h5">
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      <Typography className={classes.text} variant="subtitle1">
        {text}
      </Typography>
      </div>
   <ContainedButtons button='View patients' href='/patients'></ContainedButtons>
   </div>
    </div>
  );
};

export default DoctorCard;