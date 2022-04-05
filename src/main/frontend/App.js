import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const React = require('react');
const ReactDOM = require('react-dom');

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
				<Route path="/register" exact component={Register} />
				<Route path="/login" exact component={Login} />
				<Route
					path="/logout"
					exact
					component={() => (
						<Login message="User Logged Out Successfully." />
					)}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;

ReactDOM.render(
	<Router basename="/hotel-app">
		<App />
	</Router>,
	document.getElementById('react')
)
