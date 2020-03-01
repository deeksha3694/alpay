import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Payment from './payment';


class Main extends Component {
    render() {
        return ( 
            <div>
               <Route path="/payment" component={Payment} />
               
            </div>
        )
    }
}
//Export The Main Component
export default Main;