import React from "react";

class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="footer">
				<footer class="py-2 bg-dark fixed-bottom">
					<div class="container">
						<p class="m-0 text-center text-white">
							Copyright &copy; My Website 2022
						</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
