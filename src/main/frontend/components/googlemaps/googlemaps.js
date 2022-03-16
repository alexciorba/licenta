import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './googlemaps.css';

const mapStyles = {
	width: '100%',
	height: '100%'
};

export class MapContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			places: [],
			showingInfoWindow: false,  // Hides or shows the InfoWindow
			activeMarker: {},          // Shows the active marker upon click
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
		});

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
			<Map
				google={this.props.google}
				zoom={14}
				style={mapStyles}
				initialCenter={
					{
						lat: 40.6710729,
						lng: -73.9988001
					}
				}
			>
				{
					this.state.places.map(item =>
						<Marker
							key={item.id}
							title={item.name}
							name={item.name}
							onClick={this.onMarkerClick}
							position={{ lat: item.latitude, lng: item.longitude }}
						/>

					)
				}

				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
					onClose={this.onClose}
				>
					<div className="marker">
						<h4>{this.state.selectedPlace.name}</h4>
					</div>
				</InfoWindow>

			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBA4mCmjT081BJPELrTMdb_yMKzhOU1Wpc'
})(MapContainer);