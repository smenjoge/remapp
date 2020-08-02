import React from "react";

function ContactForm(props) {
    const {contactFormSubmit} = props;
    return (
        <form className="mt-3">
            <div className="form-group">
                <label htmlFor="InputName">Name</label>
                <input type="text" id="InputName" className="form-control" placeholder="First-Name Last-Name"></input>
            </div>
            <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input type="email" id="InputEmail" className="form-control" placeholder="name@example.com"></input>
            </div>
            <div className="form-group">
                <label htmlFor="InputMessage">Message</label>
                <textarea id="InputMessage" className="form-control" rows="5" maxLength="500" placeholder="Please enter your message here, maximum upto 500 characters."></textarea>
            </div>
            <button onClick={() => contactFormSubmit()} type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ContactForm;