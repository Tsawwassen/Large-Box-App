import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components import
import Navigation from '../nav/nav.js';

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
	<Router>
	  	<div className="App">
			<Navigation />
			<Switch>
			  	<Route path="/">
					<h1> hello</h1>
			  	</Route>
			</Switch>
		</div>
	</Router>
  );
}

export default App;
