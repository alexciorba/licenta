import React, { useState, useEffect } from "react";

const Footer = () => {
	const [fullYear, setFullYear] = useState();

	useEffect(() => {
		setFullYear(new Date().getFullYear());
	}, [fullYear]);

	return (
		<div class="bg-dark">
			<div class="container">
				<div class="h-50">&nbsp;</div>
				<div class="row">
					<div class="col-md-4 text-left text-muted">
						<div class="text-light">Locatie: Str. Freziei, Nr. 34, Timisoara</div>
						<div class="text-light">Receptie hotel: +40256258253</div>
						<div class="text-light">Evenimente: +40727458253</div>
						<div class="text-light">Email: office@hotelalexia.ro</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 text-center text-muted">
						<div>{fullYear}-{fullYear + 1}, All Rights Reserved by Alexia</div>
					</div>
				</div>
				<div class="h-100">&nbsp;</div>
			</div>
		</div>
	);
};

export default Footer;
