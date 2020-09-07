import React from 'react';

import hexagon from '../../../Assets/Icons/hexagon.svg';
import { isEmpty } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import RedCard from './Porfolioredcard.js';

const useStyles = makeStyles((theme) => ({
	Header: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: '100%'
	},
	data: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		'& > :nth-child(n+1)': {
			margin: '16px'
		}
	},
	head: {
		width: '160px',
		height: '18px',
		textAlign: 'left',
		letterSpacing: '1.82px',
		color: '#FF2222',
		textTransform: 'uppercase'
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
	},
	full: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '20px'
	}
}));

const RedCardDivision = (props) => {
	const classes = useStyles(props);

	const redcards = [
		{
			title: 'The Risks Of Lasik Surgery',
			text: 'Lorem ipsum dolor sit amet adicing elit maecenas sa faubus mollisinterdum.',
			image: hexagon
		},
		{
			title: 'The Risks Of Lasik Surgery',
			text: 'Lorem ipsum dolor sit amet adicing elit maecenas sa faubus mollisinterdum.',
			image: hexagon
		},
		{
			title: 'The Risks Of Lasik Surgery',
			text: 'Lorem ipsum dolor sit amet adicing elit maecenas sa faubus mollisinterdum.',
			image: hexagon
		}
	];

	return (
		<div className={classes.full}>
			{!isEmpty(redcards) &&
				redcards.map((items) => {
					return <RedCard data={items} />;
				})}
		</div>
	);
};

export default RedCardDivision;
