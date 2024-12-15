import React from "react";
import './errorPage.css'
import Navbar from './component/navbar.jsx';
import Footer from './component/footer.jsx';
import { Link } from "react-router-dom";
import Main from "./component/main.jsx";

function ErrorPage() {
    return (
        <div className="errorPage">
            <Main>
                <Navbar />
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </Main>
            <Footer />
        </div>
    )
}

export default ErrorPage;