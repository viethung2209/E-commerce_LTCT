import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showLogin } from '../../../Redux/auth.slice';
import { getUserCartInfo } from '../../../Api/cart.api';

function Cart(props) {

    const currentUser = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch()

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [shippingCharge, setShippingCharge] = useState(0);

    if (!currentUser) {
        dispatch(showLogin());
    } else {
        console.log("user_id")
        console.log(currentUser.id)
    }

    const fetchCart = async () => {
        let userId = currentUser.id;

        let response = await getUserCartInfo(userId);
        setCart(response.data.data);
        setTotalPrice(response.data.totalPrice);
    }

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <>{currentUser ?
            <div className="card-container">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-bordered text-center mb-0">
                            <thead className="bg-secondary text-dark">
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng cộng</th>
                                    <th>Xóa</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {cart.map((item, index) => (
                                    <tr key={item?.id}>
                                        <td className="align-middle">
                                            <img src={item?.image_url} style={{ width: '50px', marginRight: '20px' }} alt="" />
                                            <span className='align-middle'>{item?.name}</span>
                                        </td>
                                        <td className="align-middle">{item?.price}</td>
                                        <td className="align-middle">
                                            <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" className="form-control form-control-sm bg-secondary text-center" value={item?.quanty} />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">{item?.total_price}</td>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <form className="mb-5" action="">
                            <div className="input-group">
                                <input type="text" className="form-control p-4" placeholder="Mã giảm giá" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Áp dụng</button>
                                </div>
                            </div>
                        </form>
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">Thanh toán</h4>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">Tổng tiền hàng</h6>
                                    <h6 className="font-weight-medium">{totalPrice} VND</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Phí vận chuyển</h6>
                                    <h6 className="font-weight-medium">{shippingCharge} VND</h6>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">Tổng thanh toán</h5>
                                    <h5 className="font-weight-bold">{Number(totalPrice) + Number(shippingCharge)} VND</h5>
                                </div>
                                <button className="btn btn-block btn-primary my-3 py-3">
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            :
            <div style={{
                width: "100%", textAlign: "center", cursor: "pointer"
            }}
                onClick={() => { dispatch(showLogin()) }}
            >
                Hãy <b><i><u style={{ color: '#C5837C' }}>đăng nhập</u></i></b> để xem giỏ hàng!
            </div>
        }</>
    );
}

export default Cart;