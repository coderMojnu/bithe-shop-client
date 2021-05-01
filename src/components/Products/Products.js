import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-falls-96049.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="row">
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Products;