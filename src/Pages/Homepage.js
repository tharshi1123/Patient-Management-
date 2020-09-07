import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import  CardDivision  from '../Components/Core/Home/Doctordivision.js'
import ButtonAppBar from '../Components/Core/Home/Appbar.js'

const styles = (theme) => ({
});

class Portfoliohomepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
        
        };
    }
    
    
	render() {
        const { classes } = this.props;
       

		return (
			<div classes={classes.fullpage}>
			
				<ButtonAppBar/>
				
			<CardDivision />
			</div>
		
		);
	}
}

export default withStyles(styles)(Portfoliohomepage);
