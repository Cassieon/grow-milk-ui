import React from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Navbar from "../Navigation/Navbar.js";
import './Account.css'


class Account extends React.Component {
    
    render() {
        return (
          <div>
            <Navbar/>
            <div className="main-container">
               
                  <div className="input-container">
                    <h3>We need just a litte more info</h3>
                      <form>
                        <div className="input-boxes">
                          <input
                              type="email"
                              placeholder="Email"
                              // value={}
                              // onChange={event =>}
                              />
                            <br />
                            
                          <input
                              type="text"
                              placeholder="Full Name"
                              // value={}
                              // onChange={event =>}
                              />
                            <br />
                          
                          <input
                              type="text"
                              placeholder="Address"
                              // value={}
                              // onChange={event =>}
                              />
                            <br />
                          
                          <p>What type of products do you prefer?</p>
                            <input 
                                type="checkbox" 
                                id="soy" 
                                name="milk-type" 
                                value="Soy"/>
                            <label for="soy">Soy</label>
                            <br />  

                            <input 
                                type="checkbox" 
                                id="nut" 
                                name="milk-type" 
                                value="Nut"/>
                            <label for="nut">Nut</label>
                            <br />

                            <input 
                                type="checkbox" 
                                id="plant" 
                                name="milk-type" 
                                value="Plant"/>
                            <label for="plant">Plant</label>
                            <br />
                          
                          <p>How many people are in your household?</p>
                            <input 
                                type="checkbox" 
                                id="opt1" 
                                name="household" 
                                value="1"/>
                            <label for="opt1">1-2</label>
                            <br />

                            <input 
                                type="checkbox" 
                                id="opt2" 
                                name="household" 
                                value="2"/>
                            <label for="opt2">2-4</label>
                            <br />

                            <input 
                                type="checkbox" 
                                id="opt3" 
                                name="household" 
                                value="3"/>
                            <label for="plant">4-6</label>
                            <br />

                            <input
                                type="password"
                                placeholder="Password"
                                // value={}
                                // onChange={event =>}
                                />
                              
                          
                        </div>
                      </form>
                  </div>
              </div>
          </div>

        )
    }
}

export default Account;