import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import Search from './pages/Search';
import Maps from './pages/Maps';

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Landing}/>
            <Route path='/search' component={Search}/>
            <Route path='/maps' component={Maps}/>
        </BrowserRouter>
    );
}

export default Routes;