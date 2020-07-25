import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components import
import Navigation from '../nav/nav.js';
import LargeBoxApp from '../lba/lba.js';

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
	<Router>
	  	<div className="App">
			<Navigation />
			<Switch>
				<Route path="/lba">
			  		<LargeBoxApp />
			  	</Route>
			  	<Route path="/">
					<h2> Please select a label type from the top </h2>
			  	</Route>
			  
			</Switch>
		</div>
	</Router>
  );
}

export default App;
