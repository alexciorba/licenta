import React, { Component, useState } from 'react';
import "./Pages.css";
import HotelRoom1 from '../../../assets/images/hotel-room1.jpg';
import { Reservation } from "../services/index";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import IndexNavbar from './Navbars/IndexNavbar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from './Footers/Footer';

import { Link } from "react-router-dom";

const initialState = {
    name: "",
    surname: "",
    address: "",
    addressSecondary: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",

};

const Reservations = () => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [state, setState] = useState({ ...initialState, checkInDate: new Date(), checkOutDate: new Date() });

    const userReservation = () => {
        fetch('http://localhost:8080/hotel-app/reservation/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })
            .then(res => res.json())
            .then((data) => {
                setShow(true);
                setMessage(data.message);

            })
            .then(res => console.log(res))

    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value })
    }

    return (
        <div>
            <div className={'nav-color'}>
                <IndexNavbar />
            </div>
            <div className={'reservation'}>
                <Container>
                    <Row>
                        <Col md={8}>
                            <h3>Detaliile rezervarii</h3>
                            <div className={'form'}>
                                <Row>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Nume <span>*</span></Label>
                                            <Input onChange={handleChange} name='surname' />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Prenume <span>*</span></Label>
                                            <Input onChange={handleChange} name='name' />
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Adresa 1 <span>*</span></Label>
                                            <Input onChange={handleChange} name='address' />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Adresa 2</Label>
                                            <Input onChange={handleChange} name='addressSecondary' />
                                        </div>
                                    </Col>

                                    <Col md={4}>
                                        <div className={'form-group'}>
                                            <Label>Oras <span>*</span></Label>
                                            <Input onChange={handleChange} name='city' />
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className={'form-group'}>
                                            <Label>Judet <span>*</span></Label>
                                            <Input onChange={handleChange} name='county' />
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className={'form-group'}>
                                            <Label>Cod postal <span>*</span></Label>
                                            <Input onChange={handleChange} name='postalCode' />
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Telefon <span>*</span></Label>
                                            <Input onChange={handleChange} name='phone' />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Adresa de email</Label>
                                            <Input onChange={handleChange} name='email' />
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Check In <span>*</span></Label>
                                            <DatePicker className={'date-picker'} selected={state.checkInDate}
                                                onChange={(date) => setState({ ...state, checkInDate: date })} />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Check Out <span>*</span></Label>
                                            <DatePicker className={'date-picker'} selected={state.checkOutDate}
                                                onChange={(date) => setState({ ...state, checkOutDate: date })} />
                                        </div>
                                    </Col>

                                    <Col md={12}>
                                        <div align={'right'}>
                                            <Button className={'btn-warning btn-reservation'} onClick={userReservation}>Rezerva</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col md={4}>
                            <h3>Camera selectata</h3>
                            <div className={'card-room'}>
                                <img src={HotelRoom1} />
                                <div className={'card-data'}>
                                    <i className="fa fa-bed" />
                                    <span>Numar de paturi</span>
                                    <span>-</span>
                                    <span>2</span>
                                </div>

                                <div className={'card-data'}>
                                    <i className="fa fa-money" />
                                    <span>Rata orara</span>
                                    <span>-</span>
                                    <span>$100</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div >
    );
}

export default Reservations;
