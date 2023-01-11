import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showLogin } from '../../../Redux/auth.slice';

function Cart(props) {

    const currentUser = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch()

    if(!currentUser) {
        dispatch(showLogin());
    }

    return (
        <>{currentUser ?
            <div className="card-container">
                <iframe className='card-frame'
                    src={`https://hssh18121.github.io/Cart-frontend/${currentUser?.id}`} 
                    frameborder="0"
                    title='card'
                ></iframe>
            </div>
            :
            <div style={{
                width: "100%", textAlign: "center", cursor: "pointer"
            }}
                onClick={() => {dispatch(showLogin())}}
            >
                Hãy <b><i><u style={{color:'#C5837C'}}>đăng nhập</u></i></b> để xem giỏ hàng!
            </div>
        }</>
    );
}

export default Cart;