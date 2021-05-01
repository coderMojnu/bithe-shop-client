import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useParams } from 'react-router';
import { UserContext } from '../../App';


const Checkout = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const {name, email} = user;
    const [orderDate, setOrderDate] = useState({
        ordDate: new Date()
    })
    const { pname } = useParams();
    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }));


    const classes = useStyles();
    // useEffect(()=> {
    //     fetch(`http://localhost:3000/checkout/${_id}`)
    //     .then(res => res.json())
    //     .then(data => setProduct(data));
    // },[_id]);
    // console.log(product)
     const handleDate = (date) => {
        const newDate = { ...orderDate }
        newDate.ordDate = date;
        setOrderDate(newDate);
    };
    const handleOrder = () => {
        const newOrder = { name, email, pname, ...orderDate };
         fetch('https://afternoon-falls-96049.herokuapp.com/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    
    return (
        <div className="container">
            <form className={classes.container} noValidate>
                <TextField
                    id="datetime-local"
                    label="Order Date"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    onChange={handleDate}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <p>{pname}</p>
            <button className="btn btn-primary" onClick={handleOrder}
            >Place Order</button>
        </div>
    );
};

export default Checkout;