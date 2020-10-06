import Portfoliohomepage from '../Pages/Homepage.js';
// import ImageCards from '../Components/Core/Portfolio/Portfoliohome2.js';
import Patients from '../Components/Core/Patients/Patientdivision.js';
import Model from '../Components/Addpatients.js'
import LoginForms from '../Pages/Login.js'
import SignupForms from '../Pages/Signup.js'
const publicRoutes = [
	{
		path: '/',
		component: Portfoliohomepage,
		exact: true
	},
	// {
	// 	path: '/portfoliohome',
	// 	component: ImageCards,
	// 	exact: true
	// },
	{
		path: '/patients',
		component: Patients,
		exact: true
	},
	{
		path: '/model',
		component: Model,
		exact: true
	},
	{
		path: '/login',
		component: LoginForms,
		exact: true
	},
	{
		path: '/signup',
		component:SignupForms,
		exact: true
	}
];

export default publicRoutes;
