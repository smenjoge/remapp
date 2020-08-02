import React from "react";
import "./style.css";
import PageHeading from "../components/PageHeading";
import VerticalTabs from "../components/VerticalTabs";
import EmptyCol from "../components/EmptyCol";
import ProjectInfo from "../projects.json"

function Portfolio() {
    const projects = ProjectInfo.projects;
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 border p-5 bg-white">
                    <PageHeading>Portfolio</PageHeading>
                    <VerticalTabs projects={projects} />
                    {/* placeholder column for screen sizes large and xl  */}
                    <EmptyCol />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;