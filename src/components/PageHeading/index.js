import React from "react";

function PageHeading(props) {
    return (
        <div className="row">
            <div className="col text-info border-bottom">
                <h3>{props.children}</h3>
            </div>
        </div>               
    )
}

export default PageHeading;