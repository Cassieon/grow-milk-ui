import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Navbar from "../Navigation/Navbar.js";
import './Account.css'
import { Link } from "react-router-dom";



class Account extends React.Component {

  constructor(props) { //keeps track of the changing data below
    super(props);
      this.state = {
        email: props.initialText || '',
        username: props.initialText || '',
        productType: "",
        productSize: "",
        password: props.initialText || ''

      }
  }

  _handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
  }

  // const [input, setInput] = useState(" ")
    
    render() {
      const { email, username, productType, productSize, password } = this.state
        return (
          <div>
            <Navbar/>
            <div className="main-container">
               
                  <div className="input-container">
                    <h3>We need just a litte more info</h3>
                      <form onSubmit={this._handleSubmit}>

                        <div className="input-boxes">
                          <input className="txtbox"
                              type="text"
                              placeholder="Email"
                              defaultValue={email}
                              onChange={this.handleChange}
                              />
                        </div>

                        <div className="input-boxes">     
                          <input className="txtbox"
                              type="text"
                              placeholder="Full Name"
                              defaultValue={username}
                              onChange={this.handleChange}
                              />
                        </div>


                        {/* <div className="input-boxes">  
                          <input className="txtbox"
                              type="text"
                              placeholder="Address"
                              // value={}
                              // onChange={event =>}
                              />
                        </div> */}


                        <div className="input-ckboxes">  
                          <p>What type of products do you prefer?</p>
                            <input 
                                type="radio" 
                                id="soy" 
                                name="milk-type" 
                                value={productType}
                                onChange={this.handleChange}/>
                            <label for="soy">Soy</label>
                            <br />  

                            <input 
                                type="radio" 
                                id="nut" 
                                name="milk-type" 
                                value={productType}
                                onChange={this.handleChange} />
                            <label for="nut">Nut</label>
                            <br />

                            <input 
                                type="radio" 
                                id="plant" 
                                name="milk-type" 
                                value={productType}
                                onChange={this.handleChange}/>
                            <label for="plant">Plant</label>
                            <br />
                        </div>

                        <div className="input-ckboxes">
                          <p>How many people are in your household?</p>
                            <input 
                                type="radio" 
                                id="opt1" 
                                name="household" 
                                value={productSize}
                                onChange={this.handleChange}/>
                            <label for="opt1">1-2</label>
                            <br />

                            <input 
                                type="radio" 
                                id="opt2" 
                                name="household" 
                                value={productSize}
                                onChange={this.handleChange}/>
                            <label for="opt2">2-4</label>
                            <br />

                            <input className="ckbox"
                                type="radio" 
                                id="opt3" 
                                name="household" 
                                value={productSize}
                                onChange={this.handleChange}/>
                            <label for="plant">4-6</label>
                            <br />

                        <div className="input-boxes">
                            <input className="txtbox"
                                type="password"
                                placeholder="Password"
                                defaultValue={password}
                                onChange={this.handleChange}
                                />
                        </div>

                        <div className="btn">
                          <Link to ="/Checkout">
                                <button className="submit">Submit</button>
                          </Link>
                        </div>

                        </div>
                      </form>
                  </div>
              </div>
          </div>

        )
    }
}

export default Account;