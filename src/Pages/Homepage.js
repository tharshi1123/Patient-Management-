import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import  CardDivision  from '../Components/Core/Home/Doctordivision.js'
import ButtonAppBar from '../Components/Core/Home/Appbar.js'
import  CardsDivision from '../Components/Core/Home/Smallcard.js'
import HeroSetup from '../Components/Core/Home/Herosetup.js'
import Carousel from '../Components/Core/Home/carousel.js'
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
		
				< CardsDivision/>
					<Carousel/>
				
			<CardDivision />
			
			</div>
		
		);
	}
}

export default withStyles(styles)(Portfoliohomepage);
