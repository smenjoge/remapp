import React from "react";
import ImageStepper from "../ImageStepper";

function TabCard(props) {
    const {description, tech, screenshot, appLink, repoLink} = props.project;
    // console.log(`TabCard props`, props);
    // const description = props.project.description;
    // const tech = props.tech;
    // const appLink = props.appLink;
    // const repoLink = props.repoLink;
    // const screenshot = props.screenshot;
    console.log(`TabCard images`, screenshot);
    return (
        <div className="card" style={{"width": "18rem"}}>
            {/* <img src="..." className="card-img-top" alt="..."></img> */}
            <ImageStepper images={screenshot}/>
            <div className="card-body">
                <h5 className="card-title">Developed Using</h5>
                <p className="card-text">{tech}</p>
                <br></br>
                <h5 className="card-title">Description</h5>
                <p className="card-text">{description}</p>
                <a href={appLink} className="card-link">Launch App</a>
                <a href={repoLink} className="card-link">App Repo</a>
            </div>
        </div>
    )
}

export default TabCard;