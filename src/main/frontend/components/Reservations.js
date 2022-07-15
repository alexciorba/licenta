import React, { Component, useState } from 'react';
import "./Pages.css";
import HotelRoom1 from '../../../assets/images/hotel-room1.jpg';
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import IndexNavbar from './Navbars/IndexNavbar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from './Footers/Footer';

const Reservations = () => {
    const [state, setState] = useState({ checkInDate: new Date(), checkOutDate: new Date() })

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
                                            <Input />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Prenume <span>*</span></Label>
                                            <Input />
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Adresa 1 <span>*</span></Label>
                                            <Input />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Adresa 2</Label>
                                            <Input />
                                        </div>
                                    </Col>

                                    <Col md={4}>
                                        <div className={'form-group'}>
                                            <Label>Oras <span>*</span></Label>
                                            <Input />
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className={'form-group'}>
                                            <Label>Judet <span>*</span></Label>
                                            <Input />
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className={'form-group'}>
                                            <Label>Cod postal <span>*</span></Label>
                                            <Input />
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Telefon <span>*</span></Label>
                                            <Input />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Adresa de email</Label>
                                            <Input />
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
                                            <Button className={'btn-warning btn-reservation'}>Rezerva</Button>
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
