import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    console.log(products)
    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            window.location.reload(false);
        })
    }
    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-4">
                <AdminSidebar/>
            </div>
            <div className="col-md-8">
                {
                    products.map(product => 
                    <div>
                        <h4 className="d-inline-block me-2">{product.pname} {product.weight} {product.price} Taka</h4>
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default ManageProduct;