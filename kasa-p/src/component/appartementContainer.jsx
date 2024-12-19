import React, { useEffect, useState } from "react";
import "./appartementContainer.jsx";
import "./appartementContainer.css";
import AppartementCard from "./appartement.jsx";



function AppartementContain() {

    const [appartement, setAppartement] = useState([]);

    useEffect(appartementFetch, [])

    function appartementFetch() {
        fetch("appartement.json").then((resp) => resp.json())
            .then((response) => setAppartement(response));
    }

    return (
        <div className="appartement__container">
            {appartement.map((appartement) =>
                (<AppartementCard title={appartement.title} imageUrl = {appartement.cover} id = {appartement.id}/>))}
        </div>
    )
}

export default AppartementContain;

