import React from 'react';
import './Hook.css';
// import LiqBtn from './LiqBtn'
import { Link } from "react-router-dom";


class Hook extends React.Component {

    render() {
        return (
            <div id="title">Select One
            <div className="main-container">
                <div className="Product">
                    <div> 
                        <img src="https://cdn-icons.flaticon.com/png/512/2268/premium/2268993.png?token=exp=1654225278~hmac=5632a7281afb59d3c7ebab7024deb0fe"/>
                    </div>
                        <div>
                            <Link to ="/Account">
                                <button>Try Me</button>
                            </Link>
                            {/* <LiqBtn/>
                            <a href="http://waaark.com" class="btn-liquid">
                            <span class="inner">Liquid button ?</span>
                            </a> */}
                        </div>


                </div>
                <div className="Product">
                    <div>
                        <img src="https://cdn-icons.flaticon.com/png/512/381/premium/381085.png?token=exp=1654225119~hmac=eed9f206ce34ef67b6a9c78367b9cc98"/>
                    </div>
                        <div>
                            <Link to ="/Account">
                                <button>Try Me</button>
                            </Link>
                        </div> 
                </div>


                <div className="Product">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/1087/1087420.png"/>
                    </div>
                        <div className="btn-div">
                            <Link to ="/Account">
                                <button>Try Me</button>
                            </Link>
                        </div>
                </div>
                

                
            </div>
            </div>
        )
    }
}
export default Hook;