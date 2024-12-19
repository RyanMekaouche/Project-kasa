import React from "react";
import { Link } from "react-router-dom";
import './about.css'
import AppartementDetails from "./component/appartementDetails";

function AboutPage() {
    return (
        <div className="about__banner">
            <img src="paysage.png" alt="montagne et ruisseaux"></img>
            <div className="about__details">
                <AppartementDetails />
                <AppartementDetails />
                <AppartementDetails />
                <AppartementDetails />
            </div>
        </div>
    )
}

export default AboutPage;