import React from "react";
import './appartementContainer.jsx';
import './appartement.css';
import { Link } from "react-router-dom";

function AppartementCard() {
    return(
        <Link to='/appartement'>
        <div className="appartement"><p>Titre de la location</p></div>
        </Link>
    )
}

export default AppartementCard;