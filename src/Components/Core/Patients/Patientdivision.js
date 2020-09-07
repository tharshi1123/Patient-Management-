import React from 'react';
import PatientCard from '../../Layouts/Patientscard.js';
import admin from '../../../Assets/Images/admin-settings-male.png';
import { isEmpty } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import HeadingAndSub from '../../Layouts/Headingandpara.js'
import 	ContainedButtons from '../../../Components/Core/Button.js'
import ButtonAppBar from '../../../Components/Core/Home/Appbar.js'
const useStyles = makeStyles((theme) => ({
  Header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
  display:'flex',
  justifyContent:'center'
		}
  },
  data: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width:'100%',
    [theme.breakpoints.down('sm')]: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
		},
    '& > :nth-child(n+1)': {
      margin: '16px',
    },
  },
  head: {
    maxWidth: '150px',
    width:'100%',
    minHeight: '18px',
    textAlign: 'left',
    letterSpacing: '1.82px',
    color: '#FF2222',
  },
  para: {
    maxWidth: '356px',
    minHeight: '49px',
    width:'100%',
    textAlign: 'center',
    letterSpacing: '0px',
    color: '#383B47',
    opacity: '1',
    font:'Bold 24px/48px Poppins'
  },
}));


const PatientCardDivision = (props) => {
  const classes = useStyles(props);
    const cards = [
      {
        title: 'J.Jude Sajith',
        bedno:'1',
        pressure:
          '230/303',
          oxygen:'99',
      image:admin,
      button:'remove',
      button1:'set',
      respiration:'19',
      temperature:'98.6',
      heartbeat:'21/23'
       
      },
      {
        title: 'B.Tharshika',
        bedno:'2',
        button:'remove',
        button1:'set',
        pressure:
          '230/303',
          oxygen:'99',
          temperature:'98.6',
      image:admin,
      respiration:'19',
      heartbeat:'21/23'
       
      },
      {
        title: 'J.Jude Sajith',
        bedno:'1',
        button:'remove',
        button1:'set',
        pressure:
          '230/303',
          oxygen:'99',
      image:admin,
      respiration:'19',
      temperature:'98.6',
      heartbeat:'21/23'
       
      },
      {
        title: 'J.Jude Sajith',
        bedno:'1',
        pressure:
          '230/303',
          button:'remove',
          button1:'set',
          oxygen:'99',
      image:admin,
      temperature:'98.6',
      respiration:'19',
      heartbeat:'21/23'
       
      },

    ];

 
    return (
   
      <div className={classes.data}>
        	<ButtonAppBar/>
        <div className={classes.Header}>
      
        <HeadingAndSub text="Patients" text2="" />
        <ContainedButtons/>
        </div>
       
        {!isEmpty(cards) &&
          cards.map((items) => {
            return <PatientCard data={items} />;
          })}
      </div>
    );
  }


export default PatientCardDivision;