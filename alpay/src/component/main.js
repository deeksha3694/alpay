import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Payment from './payment';
import Dashboard from './dashboard';


class Main extends Component {
    render() {
        return ( 
            <div>
               <Route path="/payment" component={Payment} />
               <Route path="/dashboard" component={Dashboard} />
               
            </div>
        )
    }
}
//Export The Main Component
export default Main;