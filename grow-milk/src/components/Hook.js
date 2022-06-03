import React from 'react';
import './Hook.css';
// import LiqBtn from './LiqBtn'
// import { Link } from "react-router-dom";


class Hook extends React.Component {

    render() {
        return (
            <div id="title">Select One
            <div className="main-container">
                <div className="Product-one">
                    <div> 
                        <img src="https://cdn-icons.flaticon.com/png/512/2268/premium/2268993.png?token=exp=1654105787~hmac=76d32376680301d2fa645d69f5d69f30"/>
                    </div>
                        <div>
                            {/* <Link to ="/Account">
                                <button>Click</button>
                            </Link> */}
                            {/* <LiqBtn/>
                            <a href="http://waaark.com" class="btn-liquid">
                            <span class="inner">Liquid button ?</span>
                            </a> */}
                        </div>


                </div>
                <div className="Product-two">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/1475/1475932.png"/>
                    </div>
                    
                </div>
                <div className="Product-three">
                    <div>
                        <img src="https://cdn-icons.flaticon.com/png/512/2732/premium/2732182.png?token=exp=1654105965~hmac=20d149a2670fbda65678053671ce68ec"/>
                    </div>
                    
                </div>
                

                
            </div>
            </div>
        )
    }
}
export default Hook;