import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import repositories from './Pages/Repositories';
import home from './Pages/Home';

 export default function Routes() {
     return (
         <BrowserRouter>
         <Switch>
          <Route path='/' exact component={home}   />
         <Route path= '/Repositories' component={repositories} />
         </Switch>
         </BrowserRouter>
          
     )
 } 