import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	Row,
	Col,
	Form,
	Button,
	Alert,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSignInAlt,
	faEnvelope,
	faLock,
	faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { authenticateUser } from "../../services/index";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.css';
import FormControl from "react-bootstrap/FormControl";
import '../Pages.css'
import IndexNavbar from "../Navbars/IndexNavbar";


const Login = (props) => {
	const [error, setError] = useState();
	const [show, setShow] = useState(true);

	const initialState = {
		email: "",
		password: "",
	};

	const [user, setUser] = useState(initialState);

	const credentialChange = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};


	const validateUser = () => {
		authenticateUser(user)
			.then((response) => {
				console.log(response.data);
				// return props.history.push("/");
			})
			.catch((error) => {
				console.log(error.message);
				setShow(true);
				resetLoginForm();
				setError("Invalid email and password");
			});
	};


	const resetLoginForm = () => {
		setUser(initialState);
	};

	return (
		<div className="login-page-wrapper">
			<IndexNavbar />
			<h1 className="login-title">Login</h1>
			<Row className="justify-content-md-center login-form">
				<Col md={12}>
					{show && props.message && (
						<Alert variant="success" onClose={() => setShow(false)} dismissible>
							{props.message}
						</Alert>
					)}
					{show && error && (
						<Alert variant="danger" onClose={() => setShow(false)} dismissible>
							{error}
						</Alert>
					)}
					<Row className="login-form-row">
						<Form.Group as={Col}>
							<FormControl
								required
								autoComplete="off"
								type="text"
								name="email"
								value={user.email}
								onChange={credentialChange}
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
								onChange={credentialChange}
								className={"bg-dark text-white"}
								placeholder="Enter Password"
							/>
						</Form.Group>
					</Row>
					<Row className="flex">
						<Button
							className="ml-auto w-25 mr-1"
							size="sm"
							type="button"
							variant="success"
							onClick={validateUser}
							disabled={user.email.length === 0 || user.password.length === 0}
						>
							<FontAwesomeIcon icon={faSignInAlt} /> Login
						</Button>{" "}
						<Button
							className="w-25"
							size="sm"
							type="button"
							variant="info"
							onClick={resetLoginForm}
							disabled={user.email.length === 0 && user.password.length === 0}
						>
							<FontAwesomeIcon icon={faUndo} /> Reset
						</Button>
					</Row>
				</Col>
			</Row></div>
	);
};

export default Login;
