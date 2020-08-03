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
                <p> My name is Sandesh Menjoge. I am a Software developer based in NYC. I have over {calculateTotalExp()} years of Software development experience in Investment Banking and Insurance domain. I am currenly learning to be a Full stack web developer with Rutgers University bootcamp program.</p>
                <p> I completed Bachelor's degree in Electronics and Communication Engineering from Nagpur University, India in 2005. After graduation I immediately started working as a Entry level software developer in Infosys Technologies. </p>
                <p> I have strong coding, analytical and problem solving abilities and have used my skills and experience to deliver in multiple client critical and time sensitive scenarios.</p>
            </div>
        </div>
    )
}

export default MainBody;