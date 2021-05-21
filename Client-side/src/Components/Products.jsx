import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/vendor/list')
            .then(res => {
                setProducts(res.data)
            })
    }, [])
    return (
        <div className="container">
            <div className="row pt-5 justify-content-center">
                {
                    products.map(product => <ProductCard product={product} key={product._id} />)
                }
            </div>
        </div>
    );
};

export default Products;