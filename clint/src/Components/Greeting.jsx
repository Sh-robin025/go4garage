import React from 'react';
import './Greeting.css';
import image from '../images/object 2.png';
import { Link } from 'react-router-dom';


const Greeting = () => {
    return (
        <div className="start-page">
            <div className="text-center">
                <h1 style={{color:'#f79837',letterSpacing:'2px'}}>HURRY !!</h1>
                <h4><strong>Don't Wait</strong></h4><br />
                <Link to="/login">
                    <button>Get Start</button>
                </Link>
                <br /><br /><br />
                <img src={image} className="img-fluid" style={{ height: '200px' }} alt="" />
            </div>
        </div>
    );
};

export default Greeting;