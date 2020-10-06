import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  Head:{
    width: '100%',
    display: 'flex',
    opacity: '1',
    padding: '26px',
    maxWidth: '200px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 12px 32px #383B470F',
    alignItems: 'center',
    borderRadius: '12px',
    flexDirection: 'row'
  },
  image:{
    height:'30px',
    width:'30px'
  },
  Text: {
    textAlign:'center',
    letterSpacing: '1.82px',
    color: '#000000',
    textTransform: 'uppercase',
     font: 'Bold 16px/24px Poppins',
          padding:'5px'

  },
  Text2: {
    textAlign:'center',
    letterSpacing: '1.82px',
    color: '#000000',
    textTransform: 'uppercase',
     font: 'Bold 12px/16px Poppins',
     padding:'5px'
  },
  sub:{
    margin:'auto'
  }
}));

function SmallCard(props) {
  const classes = useStyles(props);
  const { text ,image,text2} = props;

  return (
    <div className={classes.Head} >
    <div>
             <img src={image} alt="logo" className={classes.image} />
</div>
<div className={classes.sub}>
      <Typography className={classes.Text} variant="h6">
        {text}
      </Typography>
       <Typography className={classes.Text2} variant="h6">
        {text2}
      </Typography>
      </div>
    </div>
  );
}

export default SmallCard;
