import React, { Component } from 'react';
import PropTypes from "prop-types";

import logoImg from '../../assets/images/logo/logo-e-ae.svg';
import landingPage from '../../assets/images/landing.svg';

import './style.css';

export default class Landing extends Component {    
    _handleSignInClick = () => {
        window.open("http://localhost:3333/auth/twitter", "_self")
    };
    
    render() {
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
                        <a onClick={this._handleSignInClick} className="study">
                            Login
                        </a>                    
                    </div>
                </div>
            </div>
        );
    }
}