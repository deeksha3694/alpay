import React, { Component } from 'react';
import '../App.css';

class Dashboard extends Component {
    render() {
        return ( 
            <div className= "bodylogin" >
                <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category"/>

                    <ul id="myMenu">
                    <li><a href="/payment">Payment</a></li>
                    <li><a href="#">CSS</a></li>
                    </ul>
                  <form className="container" onSubmit={this.submitLogin}>
                                <h1  align="center" >Payment Details</h1> 
                                <div >
                                    <div className="logincontainer">
                                        <label>Username</label>
                                        <input name="userid" id="userid" type="text" placeholder="User ID" onChange={this.emailChangeHandler} required />
                                    </div>
                                </div> 
                                <div >
                                    <div className="logincontainer" >
                                        <label>Email or PhoneNumber</label>
                                        <input name="date" id="date" type="text" placeholder="Date" onChange={this.passwordChangeHandler} required />
                                    </div>
                                </div>
                                <form className="buttonContainer">
                                <div >
                                    <button className="loginbutton" type="submit">Log in </button>
                                    <label className="buttonlabel">
                                    </label>
                                    
                                    
                                </div>  
                                </form> 
                            </form>
            </div>   
            
        )
    }
}
//Export The Main Component
export default Dashboard;