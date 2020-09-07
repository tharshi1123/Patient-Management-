import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RedCardDivision from './Portfoliohome.js';
import Chip from '@material-ui/core/Chip';
const useStyles = makeStyles((theme) => ({
	logos: {
		width: '173px',
		height: '48px',
		opacity: '1',
		display: 'flex'
	},

	main: {
		width: '100%',
	justifyContent:'center',
	
		opacity: '1',
		display: 'flex',
		flexDirection: 'row',

		background: '#FAFAFA 0% 0% no-repeat padding-box',
		flexDirection: (props) => (props.data.rtl ? 'row-reverse' : 'row'),
		[theme.breakpoints.down('sm')]: {
			flexDirection: (props) => (props.data.rtl ? 'column' : 'column')
		}
	},
	ChipLabel: {
		width: '146px',
		height: '22px',
		textAlign: 'center',
		font: 'Heavy 16px/22px Avenir',
		color: '#FFFFFF',
		textTransform: 'uppercase',
		opacity: '1'
	},
	ChipRoot: {
		width: '195px',
		height: '46px',
		background: '#FF2222 0% 0% no-repeat padding-box',
		borderRadius: '23px',
		opacity: '1',
		zIndex: '1'
	},
	text: {
		margin: '0px',
		display: '-webkit-box',
		WebkitBoxOrient: 'vertical',
		WebkitLineClamp: '2',
		width: '462px',
		height: '77px',
		textAlign: 'left',
		color: '#A8AAAF',
		opacity: '1'
	},
	title: {
		width: '469px',
		marginTop: '10px',
		height: '49px',
		font: 'Bold 24px/38px Poppins',
		textAlign: 'left',
		color: '#383B47',
		opacity: '1'
	},
	logo: {
		width: '31px',
		height: '28px',
		opacity: '1',
		margin: '2% 4% 2% 4%'
	},
	lastdivision: {
		display: 'flex',
		flexDirection: 'row',
		margin:'0 10%',
		flexDirection: (props) => (props.data.rtl ? 'row-reverse' : 'row')
	},
	image: {
		width: '100%',
		// transform: 'matrix(0.97, 0.26, -0.26, 0.97, 0, 0)',
		[theme.breakpoints.down('sm')]: {
			width: '400px'
		}
	},
	text2: {
		width: '18px',
		height: '20px',
		textAlign: 'left',
		color: '#959595',
		opacity: '1',
		marginTop: '10px'
	},
	Card: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-around',
		[theme.breakpoints.down('sm')]: {}
	},
	webimage: {
		width: '100%',
		maxWidth:'700px'
		
	},
	sidefullsection:{
	
	}
}));

const ImageCard = (props) => {
	const classes = useStyles(props);
	const { logos, image, title, text, chip, text2, react, laravel, mongo, redcard } = props.data;
	return (
		<div className={classes.main}>
			
				<div className={classes.sidefullsection}>
					<div>
						<img src={logos} alt="logo" className={classes.logos} />
					</div>
					<div>
						<Typography className={classes.title} variant="h2">
							{title}
						</Typography>
						<Typography className={classes.text} variant="subtitle1">
							{text}
						</Typography>
					</div>
					<div>
						<RedCardDivision>{redcard}</RedCardDivision>
					</div>
					<div className={classes.lastdivision}>
						<Chip
							label="READ CASE STUDY"
							classes={{
								label: classes.ChipLabel,
								root: classes.ChipRoot
							}}
						>
							{chip}
						</Chip>
						<img src={react} alt="logo" className={classes.logo} />
						<img src={laravel} alt="logo" className={classes.logo} />
						<img src={mongo} alt="logo" className={classes.logo} />
						<Typography className={classes.text2} variant="subtitle1">
							{text2}
						</Typography>
					</div>
					</div>
	
			<div className={classes.webimage}>
				<img src={image} alt="web" className={classes.image} />
			</div>
		</div>
	);
};

export default ImageCard;
