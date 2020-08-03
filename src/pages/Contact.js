import React from "react";
import "./style.css";
import PageHeading from "../components/PageHeading";
import ContactForm from "../components/ContactForm";
import EmptyCol from "../components/EmptyCol";

function Contact(props) {
    const {contactFormSubmit} = props;
    return (
        <div className="container mt-3" style={{"paddingBottom": "130px"}}>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 border p-5 bg-white">
                    <PageHeading>Contact</PageHeading>
                    <ContactForm contactFormSubmit={contactFormSubmit}/>
                    {/* placeholder column for screen sizes large and xl  */}
                    <EmptyCol />
                </div>
            </div>
        </div>
    )
}

export default Contact;