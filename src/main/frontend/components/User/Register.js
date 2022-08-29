import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	Row,
	Col,
	Form,
	Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faEnvelope,
	faLock,
	faUndo,
	faUserPlus,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { registerUser } from "../../services/index";
import MyToast from "../MyToast";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.css';
import FormControl from "react-bootstrap/FormControl";
import IndexNavbar from "../Navbars/IndexNavbar";
import '../Pages.css'
import {  Link } from "react-router-dom";

const Register = (props) => {
	const [show, setShow] = useState(false);
	const [message, setMessage] = useState("");

	const initialState = {
		name: "",
		email: "",
		password: "",
		mobile: "",
	};

	const [user, setUser] = useState(initialState);

	const userChange = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const dispatch = useDispatch();

	const saveUser = () => {
		/*dispatch(registerUser(user))
			.then((response) => {
				setShow(true);
				setMessage(response.message);
				resetRegisterForm();
				setTimeout(() => {
					setShow(false);
					props.history.push("/login");
				}, 2000);
			})
			.catch((error) => {
				console.log(error);
			});*/

		fetch('http://localhost:8080/hotel-app/user/register', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then(res => res.json())
			.then((data) => {
				setShow(true);
				setMessage(data.message);
				resetRegisterForm();
			})
			.then(res => console.log(res))
	};

	const resetRegisterForm = () => {
		setUser(initialState);
	};

	return (
		<div className="login-page-wrapper">
			<div style={{ display: show ? "block" : "none" }}>
				<MyToast show={show} message={message} type={"success"} />
			</div>
			<IndexNavbar />
			<h1 className="login-title">Register</h1>
			<Row className="justify-content-md-center login-form">
				<Col xs={12}>

					<Row className="login-form-row">
						<Form.Group as={Col}>
							<FormControl
								autoComplete="off"
								type="text"
								name="firstName"
								value={user.firstName}
								onChange={userChange}
								className={"bg-dark text-white"}
								placeholder="First Name"
							/>
						</Form.Group>
					</Row>
					<Row className="login-form-row">
						<Form.Group as={Col}>
							<FormControl
								autoComplete="off"
								type="text"
								name="lastName"
								value={user.lastName}
								onChange={userChange}
								className={"bg-dark text-white"}
								placeholder="Last Name"
							/>
						</Form.Group>
					</Row>
					<Row className="login-form-row">
						<Form.Group as={Col}>
							<FormControl
								required
								autoComplete="off"
								type="text"
								name="email"
								value={user.email}
								onChange={userChange}
								className={"bg-dark text-white"}
								placeholder="Enter Email Address"
							/>
						</Form.Group>
					</Row>
					<Row className="login-form-row">
						<Form.Group as={Col}>
							<FormControl
								required
								autoComplete="off"
								type="password"
								name="password"
								value={user.password}
								onChange={userChange}
								className={"bg-dark text-white"}
								placeholder="Enter Password"
							/>
						</Form.Group>
					</Row>
					<Row className="flex">
					<Link to="/login">
						<Button
							className="ml-auto w-25 mr-1"
							size="sm"
							type="button"
							variant="success"
							onClick={saveUser}
							disabled={ user.email.length === 0 || user.password.length === 0}
						>
							<FontAwesomeIcon icon={faUserPlus} /> Register
						</Button>{" "}
						</Link>

					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default Register;
