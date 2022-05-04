import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Reservations from "./components/Reservations";
import Facilities from "./components/Facilities";
import MapContainer from "./components/Contact"
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import RootReducer from "./services/rootReducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Outlet } from "react-router-dom";
import HotelLogo from '../../../src/assets/images/hotel-logo.png';

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
			<NavigationBar />
			<div class="container">
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/home" element={<Home />} />
					<Route path="/rooms" element={<Rooms />} />
					<Route path="/Reservations" element={<Reservations />} />
					<Route path="/facilities" element={<Facilities />} />
					<Route path="/contact" element={<MapContainer />} />
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
				<Outlet />
			</div>
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
