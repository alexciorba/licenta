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
import 	FormControl from "react-bootstrap/FormControl";

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
		dispatch(registerUser(user))
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
			});
	};

	const resetRegisterForm = () => {
		setUser(initialState);
	};

	return (
		<div>
			<div style={{ display: show ? "block" : "none" }}>
				<MyToast show={show} message={message} type={"success"} />
			</div>
			<Row className="justify-content-md-center">
				<Col xs={5}>
					<Card className={"border border-dark bg-dark text-white"}>
						<Card.Header>
							<FontAwesomeIcon icon={faUserPlus} /> Register
						</Card.Header>
						<Card.Body>
							<Row>
								<FontAwesomeIcon icon={faUserPlus} />

								<Form.Group as={Col}>
									
										<FormControl
											autoComplete="off"
											type="text"
											name="name"
											value={user.name}
											onChange={userChange}
											className={"bg-dark text-white"}
											placeholder="Enter Name"
										/>
									
								</Form.Group>
							</Row>
							<Row>
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
							<Row>
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
							<Row>
								<Form.Group as={Col}>
										<FormControl
											autoComplete="off"
											type="text"
											name="mobile"
											value={user.mobile}
											onChange={userChange}
											className={"bg-dark text-white"}
											placeholder="Enter Mobile Number"
										/>
								</Form.Group>
							</Row>
						</Card.Body>
						<Card.Footer style={{ textAlign: "right" }}>
							<Button
								size="sm"
								type="button"
								variant="success"
								onClick={saveUser}
								disabled={user.email.length === 0 || user.password.length === 0}
							>
								<FontAwesomeIcon icon={faUserPlus} /> Register
							</Button>{" "}
							<Button
								size="sm"
								type="button"
								variant="info"
								onClick={resetRegisterForm}
							>
								<FontAwesomeIcon icon={faUndo} /> Reset
							</Button>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Register;
