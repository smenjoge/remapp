import React from "react";
import "./style.css";
import PageHeading from "../components/PageHeading";
import HorizTabs from "../components/HorizTabs";
import EmptyCol from "../components/EmptyCol";
import ProjectInfo from "../projects.json"

function Portfolio() {
    const projects = ProjectInfo.projects;
    return (
        <div className="container mt-3" style={{"paddingBottom": "130px"}}>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 border p-5 bg-white">
                    <PageHeading>Portfolio</PageHeading>
                    <HorizTabs projects={projects} />
                    {/* placeholder column for screen sizes large and xl  */}
                    <EmptyCol />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;