import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-dark" style={{"z-index": 10}}>
            <div className="container-fluid text-center">
                <ul className="bd-footer-links">
                    <li><a href="https://www.facebook.com/sandesh.menjoge" target="_blank" rel="noopener noreferrer">FaceBook</a></li>
                    <li><a href="https://www.linkedin.com/in/sandesh-menjoge-67b92b80" target="_blank" rel="noopener noreferrer">LinkedIN</a></li>
                    <li><a href="https://github.com/smenjoge" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><Link to="/">About</Link></li>
                </ul>
                <p>© Copyright</p>
            </div>
        </footer>
    )
}

export default Footer;