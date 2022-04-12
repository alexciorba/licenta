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

	const dispatch = useDispatch();

	const validateUser = () => {
		dispatch(authenticateUser(user.email, user.password))
			.then((response) => {
				console.log(response.data);
				return props.history.push("/home");
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
		<Row className="justify-content-md-center">
			<Col xs={5}>
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
				<Card className={"border border-dark bg-dark text-white"}>
					<Card.Header>
						<FontAwesomeIcon icon={faSignInAlt} /> Login
					</Card.Header>
					<Card.Body>
						<Row>
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
						<Row>
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
					</Card.Body>
					<Card.Footer style={{ textAlign: "right" }}>
						<Button
							size="sm"
							type="button"
							variant="success"
							onClick={validateUser}
							disabled={user.email.length === 0 || user.password.length === 0}
						>
							<FontAwesomeIcon icon={faSignInAlt} /> Login
						</Button>{" "}
						<Button
							size="sm"
							type="button"
							variant="info"
							onClick={resetLoginForm}
							disabled={user.email.length === 0 && user.password.length === 0}
						>
							<FontAwesomeIcon icon={faUndo} /> Reset
						</Button>
					</Card.Footer>
				</Card>
			</Col>
		</Row>
	);
};

export default Login;
