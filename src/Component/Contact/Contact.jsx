import React from 'react';

function Contact(props) {
    return (
        <div
        // className="container-fluid pt-5"
        >
            {/* <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">HÃY LIÊN HỆ VỚI CHÚNG TÔI</span>
                </h2>
            </div>
            <div className="row px-xl-5">
                <div className="col-lg-7 mb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form className="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="control-group">
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="Tên"
                                       required="required"
                                       data-validation-required-message="Please enter your name"/>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email"
                                       className="form-control"
                                       id="email"
                                       placeholder="Email"
                                       required="required"
                                       data-validation-required-message="Please enter your email"/>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text"
                                       className="form-control"
                                       id="subject" placeholder="Tiêu đề"
                                       required="required"
                                       data-validation-required-message="Please enter a subject"/>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                            <textarea className="form-control"
                                      rows="6" id="message"
                                      placeholder="Tin nhắn"
                                      required="required"
                                      data-validation-required-message="Please enter your message">
                            </textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">
                                    Gửi tin nhắn
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 mb-5">
                    <h5 className="font-weight-semi-bold mb-3">Liên hệ</h5>
                    <p>
                        Nếu bạn có bất cứ thắc mắc gì về sản phẩm của chúng tôi, hoặc muốn nhận các thông tin sản phẩm mới nhất, hãy liên hệ với chúng tôi qua những địa chỉ sau
                    </p>
                    <div className="d-flex flex-column mb-3">
                        <h5 className="font-weight-semi-bold mb-3">E Shopper Hà Nội</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3">
                            </i>số 1, phường Bách Khoa, quận Hai Bà Trưng, TP. Hà Nội, Việt Nam
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-envelope text-primary mr-3"></i>
                            eshoppperhanoi@eshopper.com
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-phone-alt text-primary mr-3"></i>
                            (+84)8 123 456
                        </p>
                    </div>
                    <div className="d-flex flex-column">
                        <h5 className="font-weight-semi-bold mb-3">E Shopper Dubai</h5>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt text-primary mr-3"></i>
                            The Dubai Mall, Dubai, UAE
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-envelope text-primary mr-3"></i>
                            eshopperdubai@eshopper.com
                        </p>
                        <p className="mb-0">
                            <i className="fa fa-phone-alt text-primary mr-3"></i>
                            (+941)9 999 9999
                        </p>
                    </div>
                </div>
            </div> */}
            <iframe src="https://chat-real-time-production-1e8e.up.railway.app/ " class="chatbox" scrolling="no">

            </iframe>
        </div >
    );
}

export default Contact;