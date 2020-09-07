import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  Head:{
    justifyContent:'center',
    margin:'0 auto'
  },
  Text: {
    textAlign:'center',
    height: '18px',
    letterSpacing: '1.82px',
    color: '#FF2222',
    textTransform: 'uppercase',
    opacity: '1',
    margin:'6px'
  },
  Text2:{
    textAlign:'center',
    height: '49px',
    letterSpacing: '0px',
    color: '#383B47',
    opacity: '1',
    font: 'Bold 32px/47px Poppins',
    [theme.breakpoints.down("sm")]: {
      font: "Bold 11px/26px Poppins",
    },
    margin:'10px'

  }
}));

function HeadingAndSub(props) {
  const classes = useStyles(props);
  const { text, text2 } = props;

  return (
    <div className={classes.Head} >
      <Typography className={classes.Text} variant="h6">
        {text}
      </Typography>
      <Typography className={classes.Text2} variant="h6">
        {text2}
      </Typography>
    </div>
  );
}

export default HeadingAndSub;
