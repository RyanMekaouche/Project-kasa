
import react, { useEffect } from "react";
import "./appartementPage.css"
import AppartementDetails from "./component/appartementDetails";
import { useLocation } from "react-router-dom";



function AppartementPage() {
    const location = useLocation();
    console.log("location:", location);

    useEffect(fetchAppartementPage, [])

    function fetchAppartementPage() {
        fetch("appartement.json").then((resp) => resp.json())
            .then((appartements) => appartements.find(appartements.id ===location.state.AppartementId));
    }

    return (
        <div className="appartementPage">
            <div>
                <img src="Background.png" alt="salon avec une décoration fleuris"></img>
            </div>
            <div className="appartementPage__flex">
                <div className="appartementPage__location">
                    <h1>Cozy loft on the Canal Saint-Martin</h1>
                    <h2>Paris, Île-de-France</h2>
                    <span>Cozy</span>
                    <span>Canal</span>
                    <span>Paris 10</span>
                </div>
                <div className="appartement__notice">
                    <div className="appartement__notice--profil">
                        <h3>Alexandre Dumas</h3>
                        <div className="appartement__notice--badge"></div>
                    </div>
                    <div className="appartement__notice--stars">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span className="star__grey">★</span>
                        <span className="star__grey">★</span>
                    </div>
                </div>
            </div>
            <div className="details__container">
                <AppartementDetails />
                <AppartementDetails />
            </div>
        </div>
    )
}



export default AppartementPage;