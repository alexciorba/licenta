/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";

function IndexHeader() {
    return (
        <>
            <div
                className="page-header section-dark"
                style={{
                    backgroundImage:
                        "url(" + require("../../../../assets/images/hotel-logo.png").default + ")",
                }}
            >
                <div className="filter" />
                <div className="content-center">
                    <Container>
                        <div className="title-brand">
                            <h1 className="presentation-title">Hotel App</h1>
                        </div>
                        <h2 className="presentation-subtitle text-center">
                            Make Your Life Better and Bright! You must trip with Us!
                        </h2>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default IndexHeader;
