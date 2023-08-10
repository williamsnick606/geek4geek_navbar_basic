import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Events from './pages/Events.js';
import AnnualReport from './pages/Annualreport.js';
import Teams from './pages/Teams.js';
import Blogs from './pages/Blogs.js';
import SignUp from './pages/Signup.js';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
	</Routes>
	</Router>
);
}

export default App;
