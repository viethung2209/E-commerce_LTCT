import React from 'react';
import { useSelector } from 'react-redux';

function OrderHistory(props) {

    const currentUser = useSelector(state => state.auth.login.currentUser);

    console.log('User: ', currentUser);

    return (
        <div className="card-container">
            <iframe className='card-frame'
            src={`http://103.179.173.95:8081/listOrderByUser/${currentUser.id}`} 
            frameborder="0"
            title='card'
            ></iframe>
        </div>
    );
}

export default OrderHistory;