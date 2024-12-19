// import logements from './data/logement.json';
import react from "react";
import './homePage.css'
import Navbar from "./component/navbar.jsx";
import Banner from "./component/banner.jsx";
import AppartementContain from "./component/appartementContainer.jsx";
import Footer from "./component/footer.jsx";



function HomePage() {
  return(
    <div>
      <Banner/>
      <AppartementContain/>
    </div>
  )
}



export default HomePage;
