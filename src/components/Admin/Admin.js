import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-4">
                    <AdminSidebar/>
                </div>
                <div className="col-md-8">
                    <form action="https://afternoon-falls-96049.herokuapp.com/addProduct" method="post">
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

export default Admin;