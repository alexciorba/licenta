import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "reactstrap";

function Footer() {

    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className={'footer-info'}>
                            <h4 className={'info-title'}>Hotel App</h4>
                            <p className={'info-address'}>Locatie: Str. Freziei, Nr. 34, Timisoara
                                <br />
                                Receptie hotel: +40256258253
                                <br />
                                Evenimente: +40727458253
                                <br />
                                Email: office@hotelalexia.ro
                            </p>
                        </div>
                    </Col>

                    <Col md={4}></Col>
                </Row>
                <div className={'hr'} />
                <Row>
                    <div className="credits ml-auto">
                        <span className="copyright dark-footer">
                            © {new Date().getFullYear()}, All Rights Reserved.
                        </span>
                    </div>
                </Row>
            </Container>
            {showTopBtn && <div onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }} className={'scroll-to-top'}>
                <FontAwesomeIcon icon={faCircleArrowUp} className="m-auto" color="white" />
            </div>}
        </footer>
    );
}

export default Footer;
