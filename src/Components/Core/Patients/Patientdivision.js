import React from 'react';
import PatientCard from '../../Layouts/Patientscard.js';
import admin from '../../../Assets/Images/admin-settings-male.png';
import { isEmpty } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import HeadingAndSub from '../../Layouts/Headingandpara.js'
import ContainedButtons from '../../../Components/Core/Button.js'
import ButtonAppBar from '../../../Components/Core/Home/Appbar.js'

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

const PatientCardDivision = (props) => {
  const classes = useStyles(props);
  const cards = [
    {
      title: 'J.Jude Sajith',
      bedno: '1',
      pressure: '230/303',
      oxygen: '99',
      image: admin,
      temperature: '98.6',
      heartbeat: '21/23'
    },
    {
      title: 'B.Tharshika',
      bedno: '2',
      pressure: '230/303',
      oxygen: '99',
      temperature: '98.6',
      image: admin,
      heartbeat: '21/23'
    },
    {
      title: 'J.Jude Sajith',
      bedno: '1',
      pressure: '230/303',
      oxygen: '99',
      image: admin,
      temperature: '98.6',
      heartbeat: '21/23'
    },
    {
      title: 'J.Jude Sajith',
      bedno: '1',
      pressure: '230/303',
      oxygen: '99',
      image: admin,
      temperature: '98.6',
      heartbeat: '21/23'
    },
  ];

  return (
    <div className={classes.data}>
      <ButtonAppBar />
      <div className={classes.Header}>
        <HeadingAndSub text="Patients" text2="" />
        <ContainedButtons button='Add patients' href='/model'></ContainedButtons>
      </div>
      {!isEmpty(cards) &&
        cards.map((items) => {
          return <PatientCard data={items} />;
        })}
    </div>
  );
}


export default PatientCardDivision;