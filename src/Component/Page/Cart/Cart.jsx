import React from 'react';
import { useSelector } from 'react-redux';

function Cart(props) {

    const currentUser = useSelector(state => state.auth.login.currentUser);

    console.log('User: ', currentUser);

    return (
        <div className="card-container">
            <iframe className='card-frame'
            src={`https://hssh18121.github.io/Cart-frontend/${currentUser.id}`} 
            frameborder="0"
            title='card'
            ></iframe>
        </div>
    );
}

export default Cart;