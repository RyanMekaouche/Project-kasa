import react from "react";
import './banner.css'


function Banner() {
    return(
        <div className="banner">
            <img src="banner.png" alt="banner"></img>
            <p className="banner__txt">Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner;