import React, { Component } from 'react';
import '../App.css';

//const imgMyimageexample = require('../static/hospital.jpg');


class Payment extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         fname: ""
            
    //     }

    //     this.fnameChangeHandler = this.fnameChangeHandler.bind(this);
    //     this.submitLogin = this.submitLogin.bind(this);
        
    // }

    // fnameChangeHandler = (e) => {
    //     this.setState({
    //         fname: e.target.value
    //     })
    // }

    render() {
        return ( 
            <div className= "bodylogin" >
                <div class="navbar">
                    <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Cancel</a>
                    <a href="#"><i class="fa fa-fw fa-search"></i> Add Recipients</a>
                </div>
                  <form className="outercontainer paymentform" onSubmit={this.submitLogin}>
                                <h1  align="center" >Payment Details</h1> 
                                <div >
                                    <div className="elements">
                                        <span class="label">Email or Phone Number</span>
                                        <div className="elements">
                                        <input name="userid" id="userid" type="text" placeholder="Email or Phone Number" onChange={this.emailChangeHandler} required />
                                        </div>
                                    </div>
                                </div> 
                                <div >
                                    <div className="elements">
                                        <span class="label">Amount</span>
                                        <div className="elements">
                                        <input name="userid" id="userid" type="text" placeholder="$" onChange={this.emailChangeHandler} required />
                                        </div>
                                    </div>
                                </div> 
                               
                                <form className="buttonContainer">
                                <div >
                                    <button className="loginbutton" type="submit">submit </button>
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
export default Payment;