import React from "react";
import classnames from "classnames";
import {
    Button,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
} from "reactstrap";
import './navbar.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserPlus,
    faSignInAlt,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../services";
import {
    faCompass
} from "@fortawesome/free-solid-svg-icons";

function IndexNavbar({ fadeIn }) {
    const [navbarColor, setNavbarColor] = React.useState(fadeIn ? "navbar-transparent" : "");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    };
    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                fadeIn ? setNavbarColor("navbar-transparent") : setNavbarColor("");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });

    const guestLinks = (<>
        <Nav className="navbar-right">
            <Link to="/register" className="nav-link">
                <FontAwesomeIcon icon={faUserPlus} /> Register
            </Link>
            <Link to="/login" className="nav-link">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Link>
        </Nav>
    </>
    );
    const userLinks = (<>
        <Nav className="navbar-right">
            <Link to={"logout"} className="nav-link" onClick={logout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </Link>
        </Nav>
    </>
    );

    return (
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
            <Container fluid>
                <div className="navbar-translate">
                    <NavbarBrand
                        data-placement="bottom"
                        href="/hotel-app"
                        title="Hotel App"
                    >
                        Hotel App
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse
                    navbar
                    isOpen={navbarCollapse}
                >
                    <Nav navbar>
                        <NavItem>
                            <Link to="/rooms" className="nav-link">Rooms</Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                to="/reservation" className="nav-link"
                            >Reservation</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                >
                    {auth.isLoggedIn ? userLinks : guestLinks}
                </Collapse>
                <NavItem>
                    <Button
                        className="btn-round contact-btn"
                        color="danger"
                    >
                        <Link to='/contact'>  <FontAwesomeIcon icon={faCompass} /> Contact</Link>
                    </Button>
                </NavItem>
            </Container>
        </Navbar >
    );
}

export default IndexNavbar;
