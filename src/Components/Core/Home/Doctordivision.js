import React from 'react';
import DoctorCard from '../../Layouts/Doctorcard.js';
import admin from '../../../Assets/Images/admin-settings-male.png';
import { isEmpty } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import HeadingAndSub from '../../Layouts/Headingandpara.js'

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


const DoctorCardDivision = (props) => {
  const classes = useStyles(props);
    const cards = [
      {
        title: 'Dr.Jude Sajith',
        text:
          'Focus on product design and UX / UI to launch beautifully designed apps',
      image:admin,
      text2:'view patients'
       
      },
      {
        title: 'Dr.Tharshika',
        text:
          'Bring your ideas to life using Swift or Dart supported by native iOS libraries or Flutter',
       image:admin,
       text2:'view patients'
      },
      {
        title: 'Dr.Jude Sajith',
        text:
          'Focus on product design and UX / UI to launch beautifully designed apps',
      image:admin,
      text2:'view patients'
       
      },
      {
        title: 'Dr.Tharshika',
        text:
          'Bring your ideas to life using Swift or Dart supported by native iOS libraries or Flutter',
       image:admin,
       text2:'view patients'
      },
      {
        title: 'Dr.Tharshika',
        text:
          'Bring your ideas to life using Swift or Dart supported by native iOS libraries or Flutter',
       image:admin,
       text2:'view patients'
      },
      {
        title: 'Dr.Tharshika',
        text:
          'Bring your ideas to life using Swift or Dart supported by native iOS libraries or Flutter',
       image:admin,
       text2:'view patients'
      },
    ];

 
    return (
      <div className={classes.data}>
        <div className={classes.Header}>
        <HeadingAndSub text="OUR DOCTORS" text2="" />
        </div>
        {!isEmpty(cards) &&
          cards.map((items) => {
            return <DoctorCard data={items} />;
          })}
      </div>
    );
  }


export default DoctorCardDivision;