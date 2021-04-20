import React from 'react';

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="/">BITHE Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/orders">Orders</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/admin">Admin</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/deals">Deals</a>
                        </li>
                        <li className="nav-item me-5">
                         <a className="nav-link active" href="/login"><button className="btn btn-primary">{user?.email  ? <img src={user.img}/>: 'Login'}</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;