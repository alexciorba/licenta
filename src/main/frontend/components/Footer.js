import React, { useState, useEffect } from "react";

import { Navbar, Container, Col } from "react-bootstrap";

const Footer = () => {
	const [fullYear, setFullYear] = useState();

	useEffect(() => {
		setFullYear(new Date().getFullYear());
	}, [fullYear]);

	return (
		<Navbar fixed="bottom" bg="dark" variant="dark">
			<Container>
				<Col lg={12} className="text-center text-muted">
					<div>Locatie: Str. Freziei, Nr. 34, Timisoara</div>
					<div>Receptie hotel: +40256258253</div>
					<div>Evenimente: +40727458253</div>
					<div>Email: office@hotelalexia.ro</div>
					<div>
						{fullYear}-{fullYear + 1}, All Rights Reserved by Alexia
					</div>
				</Col>
			</Container>
		</Navbar>
	);
};

export default Footer;
