import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Uploads from './page/upload/upload';
import App  from './App';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
               {/* <Route path='/upload' exact={true} component={Uploads} /> */}
               <Route path='/upload' exact={true} component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;