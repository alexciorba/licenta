import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserPlus,
	faSignInAlt,
	faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../services/index";

const NavigationBar = () => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(logoutUser());
	};

	const guestLinks = (<>
		<div className="me-auto">
			<Nav>
				<Link to="/rooms" className="nav-link">Rooms</Link>
				<Link to="/reservation" className="nav-link">Reservation</Link>
				<Link to="/facilities" className="nav-link">Facilities</Link>
				<Link to="/contact" className="nav-link">Contact</Link>
			</Nav>
		</div>

		<Nav className="navbar-right">
			<Link to="/register" className="nav-link">
				<FontAwesomeIcon icon={faUserPlus} /> Register
			</Link>
			<Link to="/login" className="nav-link">
				<FontAwesomeIcon icon={faSignInAlt} /> Login
			</Link>
		</Nav>
	</>
	);
	const userLinks = (<>
		<Nav className="mr-auto">
			<Link to={"add"} className="nav-link">
				Add Book
			</Link>
			<Link to={"list"} className="nav-link">
				Book List
			</Link>
			<Link to={"users"} className="nav-link">
				User List
			</Link>
		</Nav>
		<Nav className="navbar-right">
			<Link to={"logout"} className="nav-link" onClick={logout}>
				<FontAwesomeIcon icon={faSignOutAlt} /> Logout
			</Link>
		</Nav>
	</>
	);

	return (
		<Navbar bg="dark" variant="dark">
			<div class="container">
				<Link to={auth.isLoggedIn ? "home" : ""} className="navbar-brand">
					Hotel Alexia
				</Link>
				{auth.isLoggedIn ? userLinks : guestLinks}
			</div>
		</Navbar>
	);
};

export default NavigationBar;
