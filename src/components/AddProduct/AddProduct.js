import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddProduct = () => {
    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-4">
                    <AdminSidebar />
                </div>
                <div className="col-md-8">
                    <form action="http://localhost:5000/addProduct" method="post">
                        <input type="text" name="pname" id="pname" placeholder="product name" class="form-control"/>
                        <br/>
                        <input type="text" name="price" id="price" placeholder="price" class="form-control"/>
                        <br/>
                        <input type="text" name="img" id="img" placeholder="img link" class="form-control"/>
                        <br/>
                        <input type="text" name="weight" id="weight" placeholder="weight" class="form-control"/>
                        <br/>
                        <button type="submit" class="btn btn-primary">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;