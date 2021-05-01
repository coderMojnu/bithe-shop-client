import React, { useEffect, useState } from 'react';

const Order = () => {
    const [order, setOrder] = useState([]);
     const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
         fetch('https://afternoon-falls-96049.herokuapp.com/orders?email='+ user.email, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         authorization: `Bearer ${sessionStorage.getItem('token')}`
        //     }
         })
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user.email])
    return (
        <div className="container">
            <h2>You have {order.length} order</h2>
            {
                order.map(orderItem => <li>{orderItem.pname} Date: {orderItem.ordDate}</li>)
            }
        </div>
    );
};

export default Order;