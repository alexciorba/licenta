import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

class Navigation extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const {t} = this.props;
        return (
                <div className="navigation">
                
                    <nav class="navbar navbar-dark bg-dark">
                        <ul class="nav justify-content-end">
                
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Google Maps Location
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/registration">
                                Registration
                            </NavLink>
                            </li>
                
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><button onClick={sayHello} type="button" class="btn btn-primary btn-small btn-nav">Log Out</button></li>
                        </ul>
                    </nav>
                </div>
                );
    }
}

function sayHello() {
    alert('You clicked me!');
}

export default Navigation;
