import React from 'react';
import DoctorCard from '../../Layouts/Doctorcard.js';
import doctor from '../../../Assets/Icons/docot.png';
import { isEmpty } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import SmallCard from '../../../Components/Layouts/Card.js'

const useStyles = makeStyles((theme) => ({
  Header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  data: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& > :nth-child(n+1)': {
      margin: '16px',
    },
  },
}));

const CardsDivision = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.data}>

      <SmallCard text="300" text2="beds" image={doctor} />
      <SmallCard text="50" text2="Doctors" image={doctor} />

      <SmallCard text="300" text2="nurses" image={doctor} />

      <SmallCard text=" 35" text2="Ambulance" image={doctor} />

    </div>
  );
}


export default CardsDivision;