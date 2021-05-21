import React from 'react';
import './style.css';
import image from '../images/object 2.png';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Button from '@material-ui/core/Button';


const Home = () => {
    return (
        <div className="start-page row">
            <Col md={6} className="d-flex justify-content-center align-items-center">
                <img src={image} className="img-fluid" style={{ height: '300px' }} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
                <div>
                    <h1 >
                        <strong>HURRY !!</strong>
                    </h1>
                    <h5>HUNGER DON'T WAIT</h5><br />
                    <Link to="/login">
                        <Button fullWidth style={{ background: '#f79837' }} variant="contained"
                        ><strong>GET START</strong></Button>
                    </Link>
                </div>
            </Col>
        </div>
    );
};

export default Home;