import React from "react";
import HotelLogo from '../../../assets/images/hotel-logo.png';

const Welcome = () => {
	return (
		<>
		<div>
			<img src={ HotelLogo } alt="Alexia Hotel" />
		</div>
		
		<div class="container">
			<div class="text-center">
				<h2 class="hotel-title">Hotel Alexia</h2>
			</div>
			
			<div class="h-100"></div>
			
			<div class="text-center">
				<h4>Bla bla blaaaaaaaaaa</h4>
			</div>
			
			<div class="h-200"></div>
		</div>
		</>
	);
};

export default Welcome;
