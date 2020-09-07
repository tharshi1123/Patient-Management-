import React from 'react';
import ImageCard from '../Portfoliohomesection/Portfoliohomesectionfull.js';
import { Typography } from '@material-ui/core';
import inomus from '../../../Assets/Logos/Group 4940.svg';
import { isEmpty } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import react from '../../../Assets/Logos/React-icon.svg';
import laravel from '../../../Assets/Logos/Laravel.svg';
import mongo from '../../../Assets/Logos/MongoDB_Logo.svg';
import inomusweb from '../../../Assets/Images/inomusweb.png';
import comdulogo from '../../../Assets/Images/comduit-logo-header-color-transparent.png';
import comduimage from '../../../Assets/Images/01- iPad Pro 2020 Mockup.png';
import mushroomcloud from '../../../Assets/Images/Responsive Device Mockups.png';

const useStyles = makeStyles((theme) => ({
	Header: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			margin: '10%'
		}
	},
	data: {},
	head: {
		width: '180px',
		height: '18px',
		textAlign: 'left',
		letterSpacing: '1.82px',
		color: '#FF2222',
		[theme.breakpoints.down('sm')]: {
			font: ' Bold 16px/24px Poppins'
		}
	},
	para: {
		maxWidth: '356px',
		minHeight: '49px',
		width: '100%',
		textAlign: 'center',
		letterSpacing: '0px',
		color: '#383B47',
		opacity: '1',
		font: 'Bold 24px/48px Poppins'
	}
}));

const ImageCards = (props) => {
	const classes = useStyles(props);

	const imagecards = [
		{
			title: 'ERP solution for restaurants',
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
			logos: inomus,
			chip: 'READ CASE STUDY',
			react: react,
			laravel: laravel,
			mongo: mongo,
			image: inomusweb,
			text2: '+2'
		},
		{
			rtl: 'true',
			title: 'An open data portal',
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
			logos: comdulogo,
			chip: 'READ CASE STUDY',
			react: react,
			laravel: laravel,
			mongo: mongo,
			image: comduimage,
			text2: '+2'
		},
		{
			title: 'Automated mushroom cultivation',
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
			logos: inomus,
			chip: 'READ CASE STUDY',
			react: react,
			laravel: laravel,
			mongo: mongo,
			image: mushroomcloud,
			text2: '+2'
		}
	];

	return (
		<div className={classes.data}>
			<div className={classes.Header}>
				<Typography className={classes.head}>OUR PORTFOLIO</Typography>
				<Typography className={classes.para}>Awesome deliveries </Typography>
			</div>
			{!isEmpty(imagecards) &&
				imagecards.map((items) => {
					return <ImageCard data={items} />;
				})}
		</div>
	);
};

export default ImageCards;
