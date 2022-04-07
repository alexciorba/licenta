import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import RootReducer from "./services/rootReducer";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { Outlet  } from "react-router-dom";
const React = require('react');
const ReactDOM = require('react-dom');
const store = createStore(RootReducer);
const App = () => {
	window.onbeforeunload = (event) => {
		const e = event || window.event;
		e.preventDefault();
		if (e) {
			e.returnValue = "";
		}
		return "";
	};

	return (
		<Router>
			<NavigationBar />
			<Routes>
				<Route path="/" exact component={Welcome} />
				<Route path="/home" exact component={Home} />
				<Route path="/register"  component={<Register/>} />
				<Route path="/login"  component={<Login/>} />
				<Route
					path="/logout"
					exact
					component={() => (
						<Login message="User Logged Out Successfully." />
					)}
				/>
			</Routes>
			<Outlet />
			<Footer />
		</Router>
		
	);
}

export default App;

ReactDOM.render(
	<Provider store={store}> 
      <App /> 
    </Provider>,
   
	document.getElementById('react')
)
