import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import loginphoto from '../Assets/Images/loginphoto.jpg'
import ButtonAppBar from '../Components/Core/Home/Appbar.js'
import TextField from '@material-ui/core/TextField';

import { Typography } from '@material-ui/core';
import LoginForm from '../Components/Core/Forms/LoginForm.js';
import fire from '../config/fire.js'
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  head: {
    textAlign: 'center',
    font: ' Bold 35px/45px PT Sans',
    letterSpacing: '0',
    color: '#008080',
    opacity: '1',
    [theme.breakpoints.down('sm')]: {
      font: ' Bold 24px/32px PT Sans',
    },
  },
  carousalimage: {
    width: '100%',
    height: 'auto',
    borderRaduis: '10px',
    opacity: '0.3',


  },
  para: {
    maxWidth: '458px',
    minHeight: '54px',

    textAlign: ' center',
    font: '400 17px/27px PT Sans',
    letterSpacing: '0.6px',
    color: '#181D337A',
    opacity: '1',
  },
  input: {
    minHeight: '30px',
    width: 'auto',
    border: '2px solid black',
    borderRadius: '4px'
  },
  loginform: {
    minHeight: '300px',
    width: '500px',
    border: '2px solid black',
    borderRadius: '4px',
    margin: 'auto',
  },
  inputfield: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    justifyContent: 'center',
    margin: 'auto',
  },
  login: {
    display: 'flex',
    backgroundImage: `url(${loginphoto})`
    ,
     widht: '200px',
    height: '200px',
    marginTop: '100px'
  }
});



class LoginForms extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.state = {

      email: '',
      password: ''

    };
  }


  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      console.log(u)
    }).catch((err) =>
      console.log(err)
    )
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      console.log(u)
    }).catch((err) =>
      console.log(err)
    )
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <ButtonAppBar />
        </div>
        <div className={classes.login}>



          <div className={classes.loginform}>

            <form>
              <Typography className={classes.head}>Login</Typography>
              <Typography className={classes.para}>
                Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae.
                Quisque sit amet nisi erat.
          </Typography>
              <div className={classes.inputfield}>
                <TextField

                  type="text"

                  id="outlined-required"


                  variant="outlined"
                  name="email"

                  onChange={this.handleChange}
                  value={this.state.email}
                  label="E mail"

                />
                <br></br>
                <TextField

                  type="password"

                  id="outlined-required"


                  variant="outlined"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  label="Password"
                  defaultValue="tharshi@gmail.com"

                />

                <br></br>

                <Button onClick={this.login} variant="contained" color="primary">Login</Button>
                <br></br>
                <Button onClick={this.signup} variant="contained" color="primary">Signup</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoginForms);
