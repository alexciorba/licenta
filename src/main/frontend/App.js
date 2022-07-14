import "./App.css";
import "bootstrap/scss/bootstrap.scss";
import "../../assets/scss/paper-kit.scss?v=1.3.0";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Reservations from "./components/Reservations";
import Facilities from "./components/Facilities";
import Contact from "./components/Contact"
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import RootReducer from "./services/rootReducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Outlet } from "react-router-dom";

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
		<Router basename="/hotel-app">
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/home" element={<Home />} />
				<Route path="/rooms" element={<Rooms />} />
				<Route path="/reservation" element={<Reservations />} />
				<Route path="/facilities" element={<Facilities />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/logout"
					exact
					component={() => (
						<Login message="User Logged Out Successfully." />
					)}
				/>
			</Routes>
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
