import React from 'react';

function Checkout(props) {
    return (
        // <div className="container-fluid pt-5">
        //     <div className="row px-xl-5">
        //         <div className="col-lg-8">
        //             <div className="mb-4">
        //                 <h4 className="font-weight-semi-bold mb-4">Thông tin thanh toán</h4>
        //                 <div className="row">
        //                     <div className="col-md-6 form-group">
        //                         <label>Họ</label>
        //                         <input className="form-control" type="text" placeholder="Nguyễn"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Tên</label>
        //                         <input className="form-control" type="text" placeholder="Văn A"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>E-mail</label>
        //                         <input className="form-control" type="text" placeholder="example@email.com"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Số điện thoại</label>
        //                         <input className="form-control" type="text" placeholder="(+84)"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Địa chỉ</label>
        //                         <input className="form-control" type="text"
        //                                placeholder="số 1 ngõ 1 Tạ Quang Bửu, phường Bách Khoa"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Xã/phường</label>
        //                         <input className="form-control" type="text" placeholder="phường Bách Khoa"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Quận/huyện</label>
        //                         <input className="form-control" type="text" placeholder="quận Hai Bà Trưng"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Tỉnh/TP</label>
        //                         <input className="form-control" type="text" placeholder="TP. Hà Nội"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Quốc gia</label>
        //                         <select className="custom-select">
        //                             <option selected>Việt Nam</option>
        //                             <option>Lào</option>
        //                             <option>Campuchia</option>
        //                             <option>Trung Quốc</option>
        //                             <option>Thái Lan</option>
        //                             <option>Hàn Quốc</option>
        //                             <option>Nhật Bản</option>
        //                         </select>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>ZIP Code</label>
        //                         <input className="form-control" type="text" placeholder="112200"/>
        //                     </div>
        //                     <div className="col-md-12 form-group">
        //                         <div className="custom-control custom-checkbox">
        //                             <input type="checkbox" className="custom-control-input" id="shipto"/>
        //                                 <label className="custom-control-label" htmlFor="shipto" data-toggle="collapse"
        //                                        data-target="#shipping-address">Gửi hàng tới địa chỉ khác</label>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="collapse mb-4" id="shipping-address">
        //                 <h4 className="font-weight-semi-bold mb-4">Shipping Address</h4>
        //                 <div className="row">
        //                     <div className="col-md-6 form-group">
        //                         <label>Họ</label>
        //                         <input className="form-control" type="text" placeholder="Nguyễn"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Tên</label>
        //                         <input className="form-control" type="text" placeholder="Văn A"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>E-mail</label>
        //                         <input className="form-control" type="text" placeholder="example@email.com"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Số điện thoại</label>
        //                         <input className="form-control" type="text" placeholder="(+84)"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Địa chỉ</label>
        //                         <input className="form-control" type="text" placeholder="số 1 ngõ 1 Tạ Quang Bửu, phường Bách Khoa"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Xã/phường</label>
        //                         <input className="form-control" type="text" placeholder="phường Bách Khoa"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Quận/huyện</label>
        //                         <input className="form-control" type="text" placeholder="quận Hai Bà Trưng"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Tỉnh/TP</label>
        //                         <input className="form-control" type="text" placeholder="TP. Hà Nội"/>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>Quốc gia</label>
        //                         <select className="custom-select">
        //                             <option selected>Việt Nam</option>
        //                             <option>Lào</option>
        //                             <option>Campuchia</option>
        //                             <option>Trung Quốc</option>
        //                             <option>Thái Lan</option>
        //                             <option>Hàn Quốc</option>
        //                             <option>Nhật Bản</option>
        //                         </select>
        //                     </div>
        //                     <div className="col-md-6 form-group">
        //                         <label>ZIP Code</label>
        //                         <input className="form-control" type="text" placeholder="112200"/>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-lg-4">
        //             <div className="card border-secondary mb-5">
        //                 <div className="card-header bg-secondary border-0">
        //                     <h4 className="font-weight-semi-bold m-0">Tổng thanh toán</h4>
        //                 </div>
        //                 <div className="card-body">
        //                     <h5 className="font-weight-medium mb-3">Sản phẩm</h5>
        //                     <div className="d-flex justify-content-between">
        //                         <p>Áo sơ mi sành điệu đầy màu sắc 1</p>
        //                         <p>$150</p>
        //                     </div>
        //                     <div className="d-flex justify-content-between">
        //                         <p>Áo sơ mi sành điệu đầy màu sắc 2</p>
        //                         <p>$150</p>
        //                     </div>
        //                     <div className="d-flex justify-content-between">
        //                         <p>Áo sơ mi sành điệu đầy màu sắc 3</p>
        //                         <p>$150</p>
        //                     </div>
        //                     <hr className="mt-0"/>
        //                         <div className="d-flex justify-content-between mb-3 pt-1">
        //                             <h6 className="font-weight-medium">Tổng tiền hàng</h6>
        //                             <h6 className="font-weight-medium">$150</h6>
        //                         </div>
        //                         <div className="d-flex justify-content-between">
        //                             <h6 className="font-weight-medium">Phí vận chuyển</h6>
        //                             <h6 className="font-weight-medium">$10</h6>
        //                         </div>
        //                 </div>
        //                 <div className="card-footer border-secondary bg-transparent">
        //                     <div className="d-flex justify-content-between mt-2">
        //                         <h5 className="font-weight-bold">Tổng thanh toán</h5>
        //                         <h5 className="font-weight-bold">$160</h5>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="card border-secondary mb-5">
        //                 <div className="card-header bg-secondary border-0">
        //                     <h4 className="font-weight-semi-bold m-0">Phương thức thanh toán</h4>
        //                 </div>
        //                 <div className="card-body">
        //                     <div className="form-group">
        //                         <div className="custom-control custom-radio">
        //                             <input type="radio" className="custom-control-input" name="payment" id="paypal"/>
        //                                 <label className="custom-control-label" htmlFor="paypal">Paypal</label>
        //                         </div>
        //                     </div>
        //                     <div className="form-group">
        //                         <div className="custom-control custom-radio">
        //                             <input type="radio" className="custom-control-input" name="payment" id="directcheck"/>
        //                                 <label className="custom-control-label" htmlFor="directcheck">
        //                                     Thanh toán khi nhận hàng
        //                                 </label>
        //                         </div>
        //                     </div>
        //                     <div className="">
        //                         <div className="custom-control custom-radio">
        //                             <input type="radio" className="custom-control-input" name="payment" id="banktransfer"/>
        //                                 <label className="custom-control-label" htmlFor="banktransfer">
        //                                     Chuyển khoản ngân hàng
        //                                 </label>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="card-footer border-secondary bg-transparent">
        //                     <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">
        //                         Đặt hàng
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <iframe src="https://payment-project-nu.vercel.app/" class="payment" scrolling="no" frameborder="0"></iframe>
);
}

export default Checkout;