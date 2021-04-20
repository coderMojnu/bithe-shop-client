import React from 'react';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className="container">
            <div className="m-5">
                <h3 className="text-center">Buy One and Get 1 Free</h3>
                <div className="d-flex justify-content-center">
                    <input type="text" className="form-control" name="" id="" placeholder="search..." />
                    <button className="btn btn-secondary">Search</button>
                </div>
            </div>
            <Products/>
        </div>
    );
};

export default Home;