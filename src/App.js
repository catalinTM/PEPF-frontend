import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import axios from 'axios';
import moment from 'moment';

import LoginComponent from './component/LoginComponent';
import GroupTimetable from './component/GroupTimetable';
import HallTimetable from './component/HallTimetable';
import ProfTimetable from './component/ProfTimetable';
import OrarRouter from './component/OrarRouter';
import Home from './component/Home';
import CrudComponent from './component/CrudComponent';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
	useLocation,
	useParams
  } from "react-router-dom";


class App extends Component {
	constructor(props) {
		super(props)
	}

	logout = () => {
		localStorage.clear("user");
		return <Redirect to="/login"/>;
	}
	

	render() {
		return (
			
			<Router>
			<div className="auth-wrapper">
				<div className="auth-inner">	
				<Switch>
					
					<Route path="/login" component={LoginComponent}/>
					<Route path="/formular" component={Form}/>
					<Route path="/orar" component={OrarRouter}/>
					<Route path="/grupa/:an/:semian?" component={GroupTimetable}/>
					<Route path="/sala/:nume" component={HallTimetable}/>
					<Route path="/prof/:id" component={ProfTimetable}/>
					<Route path="/acasa" component={Home} />
					<Route path="/preferinte" component={CrudComponent}/>
					<Route exact path="/" render={() => (
						localStorage.getItem("user")>0 ? (
							<Redirect to="/acasa"/>
						) : (
							<Redirect to="/login"/>
						)
						)}/>
				</Switch>
					
				</div>
				
			</div>
			</Router>
		);
	}
}

export default App;