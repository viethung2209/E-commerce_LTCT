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
                {/* <iframe className='card-frame'
                    src={`https://hssh18121.github.io/Cart-frontend/${currentUser?.id}`} 
                    frameborder="0"
                    title='card'
                ></iframe> */}
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
                        <tr>
                            <td className="align-middle">
                                <img src={require('../../../img/product-1.jpg')} alt="" style={{width:'50px'}}/>
                                Áo sơ mi sành điệu đầy màu sắc
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width:'100px'}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-minus">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                    <form className="mb-5" action="">
                        <div className="input-group">
                            <input type="text" className="form-control p-4" placeholder="Mã giảm giá"/>
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
                                <h6 className="font-weight-medium">$150</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Phí vận chuyển</h6>
                                <h6 className="font-weight-medium">$10</h6>
                            </div>
                        </div>
                        <div className="card-footer border-secondary bg-transparent">
                            <div className="d-flex justify-content-between mt-2">
                                <h5 className="font-weight-bold">Tổng thanh toán</h5>
                                <h5 className="font-weight-bold">$160</h5>
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
                onClick={() => {dispatch(showLogin())}}
            >
                Hãy <b><i><u style={{color:'#C5837C'}}>đăng nhập</u></i></b> để xem giỏ hàng!
            </div>
        }</>
    );
}

export default Cart;