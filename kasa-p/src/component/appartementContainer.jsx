import React from "react";
import "./appartementContainer.jsx";
import "./appartementContainer.css";
import AppartementCard from "./appartement.jsx";


function AppartementContain() {
    return(
        <div className="appartement__container">
            <AppartementCard/>
            <AppartementCard/>
            <AppartementCard/>
            <AppartementCard/>
            <AppartementCard/>
            <AppartementCard/>
        </div>
    )
}

export default AppartementContain;