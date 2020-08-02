import React from "react";
import "./style.css";
import photo from "../../assets/Sandesh.jpg";

function MainBody(props) {
    const {windowSize} = props;

    function calculateTotalExp() {
        const startDt = new Date("2005-09-26");
        let dateDifMs = Date.now() - startDt.getTime();
        let totalExp = new Date(dateDifMs); 
        return Math.abs(totalExp.getUTCFullYear() - 1970);
    }

    return (
        <div className="row mt-3">
            <div className="col-*-12">
                <img src={photo} alt="bio.jpg"
                    className={windowSize < 768 ? "mb-3 img-full-wdth" : "float-left img-flt mr-3 mb-3"}
                />
                <p> My name is Sandesh Menjoge. I am a Software developer based in NYC. I have over {calculateTotalExp()} years of Software development experience in Investment Banking and Insurance domain. I am currenly learning to be a Full stack web developer as part of Rutgers University bootcamp program.</p>
                <p> I have a Bachelor's degree in Electronics and Communication Engineering from Nagpur University in India. I completed by studies in 2005 and started my first job immediately after in one of India's leading Software services company. </p>
                <p> When not working, I like to play cricket or soccer. When in India, I led of my company's cricket team where we finished the season unbeaten. In other hobbies, I like to jump out of perfectly working aeroplanes. I have logged more than 120 jumps so far. </p>
            </div>
        </div>
    )
}

export default MainBody;