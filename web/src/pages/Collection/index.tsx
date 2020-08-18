import React from 'react';
import Header from '../../components/Header';

import './style.css'
import Results from '../../components/Results';

function Collection() {
    return (
        <div id="page-collection">
            <Header />
            <main>
                <h4>Sua Coleção</h4>
                <Results />
                <Results />
            </main>
        </div>
    );
}

export default Collection;
