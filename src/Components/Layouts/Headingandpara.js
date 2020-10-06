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
    letterSpacing: '1.82px',
    color: '#FF2222',
    textTransform: 'uppercase',
     font: 'Bold 32px/47px Poppins',
  },
}));

function HeadingAndSub(props) {
  const classes = useStyles(props);
  const { text } = props;

  return (
    <div className={classes.Head} >
      <Typography className={classes.Text} variant="h6">
        {text}
      </Typography>
    </div>
  );
}

export default HeadingAndSub;
