import React, { Component } from 'react';
import fire from '../../../config/fire'
import LoginForms from '../../../Pages/Login.js'
import Portfoliohomepage from '../../../Pages/Homepage.js'

export default class LoginForm extends Component {
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
				{this.state.user ? (<Portfoliohomepage />) : (<LoginForms />)}
			</div>
		);
	}
}