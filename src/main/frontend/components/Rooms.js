import React from "react";
import "./Pages.css";
import HotelRoom1 from '../../../assets/images/hotel-room1.jpg';
import HotelRoom2 from '../../../assets/images/hotel-room2.jpg';
import HotelRoom3 from '../../../assets/images/hotel-room3.jpg';
import IndexNavbar from "./Navbars/IndexNavbar";
import { Button, Col, Row } from "reactstrap";
import Footer from "./Footers/Footer";

function Rooms() {


	const state = {
		rooms: [
			{
				img: HotelRoom1,
				noOfBeds: 10,
				ratePerHour: 20,
				name: 'Camera nr. 1'
			},
			{
				img: HotelRoom2,
				noOfBeds: 10,
				ratePerHour: 20,
				name: 'Camera nr. 2'
			},
			{
				img: HotelRoom3,
				noOfBeds: 10,
				ratePerHour: 20,
				name: 'Camera nr. 3'
			},
			{
				img: HotelRoom2,
				noOfBeds: 10,
				ratePerHour: 20,
				name: 'Camera nr. 4'
			},
			{
				img: HotelRoom1,
				noOfBeds: 10,
				ratePerHour: 20,
				name: 'Camera nr. 5'
			},
			{
				img: HotelRoom3,
				noOfBeds: 10,
				ratePerHour: 20,
				name: 'Camera nr. 6'
			},
		]

	}

	return (
		<>
			<IndexNavbar fadeIn={false} />
			<div class="container rooms-container">
				<h1 className="title-rooms">Rezerva-ti camera preferata</h1>
				<Row className="rooms-wrapper">
					{
						state.rooms.map((item, i) => <Col md="4" key={i}>
							<div className={'card-room'}>
								<img src={item.img} />
								<div className="name-rooms">{item.name}</div>
								<Button className={'btn-info btn-rooms'} onClick={() => {
									props.history.push('/rooms')
								}}>Rezerva</Button>
								<div className={'card-data'}>
									<i className="fa fa-bed" />
									<span>Numar de paturi</span>
									<span>-</span>
									<span>{item.noOfBeds}</span>
								</div>

								<div className={'card-data'}>
									<i className="fa fa-money" />
									<span>Rata orara</span>
									<span>-</span>
									<span>${item.ratePerHour}</span>
								</div>
							</div>
						</Col>)
					}
				</Row>
				<div class="h-50"></div>
			</div>
			<Footer />

		</>
	);
}

export default Rooms;
