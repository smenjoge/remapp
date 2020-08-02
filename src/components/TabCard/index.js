import React from "react";
import ImageStepper from "../ImageStepper";

function TabCard(props) {
    const {description, tech, screenshot, appLink, repoLink} = props.project;
    return (
        <div className="card" style={{"width": "36rem", "alignItems":"center"}}>
            <ImageStepper images={screenshot}/>
            <div className="card-body">
                <h5 className="card-title">Developed Using</h5>
                <p className="card-text">{tech}</p>
                <br></br>
                <h5 className="card-title">Description</h5>
                <p className="card-text">{description}</p>
                <a href={appLink} className="card-link">Launch App</a>
                <a href={repoLink} className="card-link">GitHub Repo</a>
            </div>
        </div>
    )
}

export default TabCard;