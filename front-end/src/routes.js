import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Uploads from './page/upload/upload';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
               <Route path='/upload' exact={true} component={Uploads} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;