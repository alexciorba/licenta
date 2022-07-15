import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Button, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from "reactstrap";
import './Pages.css';
import IndexNavbar from "../components/Navbars/IndexNavbar";
import MapContainer from './MapContainer';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            places: [],
            showingInfoWindow: false, // Hides or shows the InfoWindow
            activeMarker: {}, // Shows the active marker upon click
            selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker

        };
    }

    loadFromServer() {
        this.setState({
            places: [
                {
                    "id": 1,
                    "name": "Park Slope",
                    "latitude": "40.6710729",
                    "longitude": "-73.9988001"
                },
                {
                    "id": 2,
                    "name": "Bushwick",
                    "latitude": "40.6942861",
                    "longitude": "-73.9389312"
                },
                {
                    "id": 3,
                    "name": "East New York",
                    "latitude": "40.6577799",
                    "longitude": "-73.9147716"
                }
            ]
        });
    }

    componentDidMount() {
        this.loadFromServer();
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        }
        );
    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <div>
                <IndexNavbar />
                <div>
                    <MapContainer></MapContainer>
                </div>
                <div className={'form-contact'}>
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="text-center">Doresti sa luati legatura cu noi?</h2>
                                <Form className="contact-form">
                                    <Row>
                                        <Col md="6">
                                            <label>Nume</label>
                                            <Input
                                                placeholder="Nume"
                                            />
                                        </Col>
                                        <Col md="6">
                                            <label>Email</label>
                                            <Input
                                                placeholder="Email"
                                            />
                                        </Col>
                                    </Row>
                                    <label>Mesaj</label>
                                    <Input
                                        placeholder="Spune-ne parerea ta..."
                                        type="textarea"
                                        rows="4"
                                    />
                                    <Row>
                                        <Col className="ml-auto mr-auto" md="4">
                                            <Button className="btn-fill" color="danger" size="lg">
                                                Trimite
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Contact