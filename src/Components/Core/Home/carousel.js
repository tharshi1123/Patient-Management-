import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { withStyles } from '@material-ui/styles';
import Typography from "@material-ui/core/Typography";
import Background from '../../../Assets/Images/patient.jpg'

const styles = (theme) => ({
	carousalimage: {
		width: '100%',
		height: '700px',
		borderRaduis: '10px',
		borderColor: 'black',
		border: '1px solid #ddd',
		opacity: '0.8',


	},
	carousaltext: {
		position: 'absolute',
		bottom: '20px',
		right: '20px',
		backgroundColor: 'black',
		color: 'white',
		paddingLeft: '20px',
		paddingRight: '20px',
	}
});


const photos = [

	{
		name: 'photo 1',
		url: 'https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_960_720.jpg'
	},
	{
		name: 'photo 2',
		url: 'https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
	},
	{
		name: 'photo 3',
		url: 'https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_960_720.jpg'
	},
	{
		name: 'photo 4',
		url: 'https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_960_720.jpg'
	}
]


class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		const { classes } = this.props;

		const settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			arrows: true,
			slidesToScoroll: 1,
			className: 'slides'
		}
		return (
			<div>
				<Slider {...settings}>
					{photos.map((photo) => {
						return (
							<div>
								<img className={classes.carousalimage} src={photo.url} />
								<div className={classes.carousaltext}>
									<h4>Nature</h4>
									<p>What a beautiful sunrise</p>
								</div>

							</div>
						)
					})}
				</Slider>
			</div>
		)
	}
}

export default withStyles(styles)(Carousel);