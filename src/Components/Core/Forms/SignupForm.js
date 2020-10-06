import React, { Component } from 'react';
import fire from '../../../config/fire'
import SignupForms from '../../../Pages/Signup.js'
import Portfoliohomepage from '../../../Pages/Homepage.js'

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}

    }
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.user ? (<Portfoliohomepage />) : (<SignupForms />)}
      </div>
    );
  }
}