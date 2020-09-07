import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	image: {
		width: '412px',
		height: '412px',
		borderRadius: '6px',
		opacity: '1',
		margin:'16px',
		[theme.breakpoints.down('sm')]: {
			margin:'0px'
		}
	}
}));

const Portfolio = (props) => {
	const classes = useStyles(props);
	const { image } = props.data;
	return <img src={image} alt="logo" className={classes.image} />;
};

export default Portfolio;
