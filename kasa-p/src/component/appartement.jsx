import React from "react";
import './appartementContainer.jsx';
import './appartement.css';
import { Link } from "react-router-dom";

function AppartementCard(props) {
    const user = {
        AppartementId:props.id
    };
    return (
        <Link to='/appartement' state={user}>
            <div className="appartement">
                <img src={props.imageUrl} alt="#" />
                <p>{props.title}</p></div>
        </Link>
    )
}

export default AppartementCard;