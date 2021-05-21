import React from 'react';
import { Card, Col } from 'react-bootstrap';
import image from '../images/icon _mobile.png';

const ProductCard = ({ product }) => {
    return (
        <Col md={3}>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCard;