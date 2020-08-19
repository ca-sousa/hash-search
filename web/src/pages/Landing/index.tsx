import React from 'react';
import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo/logo-e-ae.svg'
import landingPage from '../../assets/images/landing.svg'

import './style.css'

function Landing( {authenticated} ) {
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Hasearch"/>
                    <h4>Logue-se para começar sua busca.</h4>
                </div>
                <img 
                    src={landingPage}
                    alt="Hashtag" 
                    className="hero-image"
                />

                <div className="button">
                    <Link to="/search" className="study">
                        Login
                    </Link>                    
                </div>
            </div>
        </div>
    );

    Landing.p
}

export default Landing;