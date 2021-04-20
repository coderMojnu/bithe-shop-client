import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Product = (props) => {
    const product = props.product;
    const {pname, img, price, weight} = product;
    //console.log(product)
    const history = useHistory()
    const handleProduct = (pname) => {
        history.push(`/checkout/${pname}`);
    }
    return (
            <div className="col-md-4 mb-3 border">
            <div>
                <img className="img-fluid rounded p-3" src={img} alt=""/>
                <h4 className="text-center">{pname}</h4>
                <p className="text-center">{weight}</p>
            </div>
            <div className="d-flex justify-content-between">
                <h3>${price}</h3>
               <Link to={"/checkout/"+pname}>
                     <button className="btn btn-primary" onClick={() => handleProduct(pname)}
                     >Buy Now</button>
               </Link>
            </div>
        </div>
    );
};

export default Product;