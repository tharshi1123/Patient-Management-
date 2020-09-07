import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	image: {
		width: '23px',
		height: '26px',
		opacity: '1',
		zIndex: '1',
		margin: '35% 35%'
	},
	description: {
		margin: '0% 10%'
	},
	text: {
		width: '289px',
		height: '69px',
		textAlign: 'left',
		color: '#A8AAAF',
		opacity: '1'
	},
	background: {
		width: '72px',
		height: '72px',
		background: 'transparent linear-gradient(138deg, #FF6F69 0%, #D12323 100%) 0% 0% no-repeat padding-box',
		borderRadius: '24px',
		opacity: '1'
	},
	main: {
		display: 'flex',
		flexDirection: 'row',
		width: '377px',
		height: '102px',
	
	},
	title: {
		width: '261px',
		height: '29px',
		textAlign: 'left',
		font: 'Bold 14px/24px Poppins',
		color: '#201F1F',
		opacity: '1'
	},
	full:{
margin:'0 10%'
	}
}));

const RedCard = (props) => {
	const classes = useStyles(props);
	const { image, title, text } = props.data;
	return (
		<div className={classes.full}>
			<div className={classes.main}>
				<div className={classes.background}>
					<img src={image} alt="logo" className={classes.image} />
				</div>
				<div>
					<div className={classes.description} variant="h5">
						<Typography className={classes.title} variant="h5">
							{title}
						</Typography>
						<Typography className={classes.text} variant="subtitle1">
							{text}
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RedCard;
