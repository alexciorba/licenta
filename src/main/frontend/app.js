const React = require('react');
const ReactDOM = require('react-dom');
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import GoogleMaps from "./components/googlemaps/googlemaps";

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}
	render() {
		return (

			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<GoogleMaps />} />
				
				</Routes>
				<Footer />
			</Router>
		)
	}
}
export default App;
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
	,
	document.getElementById('react')
)