import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../../Assets/Logos/HM LOGO.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'right',
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  image:
  {
    widht: '30px',
    height: '30px'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="logo" className={classes.image} />
          <Button color="inherit" href="/" id="home">home</Button>
          <Button color="inherit" href="/patients" id="patients">Patients</Button>
          <Button color="inherit" href="/login" id="login">Login</Button>
          <Button color="inherit" href="/signup" id="signup">Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}