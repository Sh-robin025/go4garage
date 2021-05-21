import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
    return (
        <Card style={{ width: '18rem' }} className="col-md-3">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;