import React from "react";
import "./style.css";
import PageHeading from "../components/PageHeading";
import MainBody from "../components/MainBody";
import EmptyCol from "../components/EmptyCol";

function About(props) {
    const {windowSize} = props;
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 border p-5 bg-white">
                    <PageHeading>About</PageHeading>
                    <MainBody windowSize={windowSize} />
                    {/* placeholder column for screen sizes large and xl  */}
                    <EmptyCol />
                </div>
            </div>
        </div>
    )
}

export default About;