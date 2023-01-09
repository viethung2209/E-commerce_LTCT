import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../Api/product.api';
import { useDispatch, useSelector } from 'react-redux';

function ProductDetail(props) {

    const param = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.product.data)

    useEffect(() => {
        getProductById(param.id, dispatch)
    }, [param, dispatch]);

    return (
        <>
            {product && (
                <p>
                    <div className="container-fluid py-5">
                        <div className="row px-xl-5">
                            <div className="col-lg-5 pb-5">
                                <div id="product-carousel" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner border">
                                        {
                                            product.sub_products.map((item) => (
                                                <div className="carousel-item active">
                                                    <img className="w-100 h-100" src={item.image_url} alt="" />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                        <i className="fa fa-2x fa-angle-left text-dark"></i>
                                    </a>
                                    <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                        <i className="fa fa-2x fa-angle-right text-dark"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-7 pb-5">
                                <h3 className="font-weight-semi-bold">{product.name}</h3>
                                <div className="d-flex mb-3">
                                    <div className="text-primary mr-2">
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star-half-alt"></small>
                                        <small className="far fa-star"></small>
                                    </div>
                                    <small className="pt-1">(50 Reviews)</small>
                                </div>
                                <h3 className="font-weight-semi-bold mb-4">{product.cost} VND</h3>
                                <p className="mb-4">
                                    {product.description}
                                </p>
                                <div className="d-flex mb-3">
                                    <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                                    <form>
                                        {product.sub_products.map(item => (
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                                <label className="custom-control-label" htmlFor="size-1">{item.size}</label>
                                            </div>
                                        ))}
                                    </form>
                                </div>
                                <div className="d-flex mb-4">
                                    <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                                    <form>
                                        {product.sub_products.map(item => (
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" className="custom-control-input" id="color" name="color" />
                                                <label className="custom-control-label" htmlFor="color">{item.color}</label>
                                            </div>
                                        ))}
                                    </form>
                                </div>
                                <div className="d-flex align-items-center mb-4 pt-2">
                                    <div className="input-group quantity mr-3" style={{ width: '130px' }}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-primary btn-minus">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" className="form-control bg-secondary text-center" value="1" />
                                        <div className="input-group-btn">
                                            <button className="btn btn-primary btn-plus">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary px-3">
                                        <i className="fa fa-shopping-cart mr-1"></i> Thêm vào giỏ hàng
                                    </button>
                                </div>
                                <div className="d-flex pt-2">
                                    <p className="text-dark font-weight-medium mb-0 mr-2">Chia sẻ:</p>
                                    <div className="d-inline-flex">
                                        <a className="text-dark px-2" href="/#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a className="text-dark px-2" href="/#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a className="text-dark px-2" href="/#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a className="text-dark px-2" href="/#">
                                            <i className="fab fa-pinterest"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row px-xl-5">
                            <div className="col">
                                <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                                    <a className="nav-item nav-link active" data-toggle="tab"
                                        href="#tab-pane-1">Description</a>
                                    <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
                                    <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-pane-1">
                                        <h4 className="mb-3">Product Description</h4>
                                        <p>
                                            <br />+ Cam kết chất lượng và mẫu mã sản phẩm giống với hình ảnh.
                                            <br />+ Hàng phải còn mới và chưa qua sử dụng
                                            <br />+ Sản phẩm bị lỗi do vận chuyển và do nhà sản xuất
                                            <br />– Nếu bạn không chắc mình mặc size bao nhiêu, bạn có thể nói về
                                            việc cung cấp cho chúng
                                            tôi
                                            chiều cao và cân nặng của bạn, chúng tôi sẽ tư vấn chuyên nghiệp
                                            cho bạn.
                                            <br />– Nếu bạn có nhu cầu đặc biệt về sản phẩm đã mua, hoặc có
                                            bất kỳ câu hỏi nào, vui lòng
                                            cho
                                            biết câu hỏi và nhu cầu của bạn trong đơn hàng sau khi đặt
                                            hàng. Chúng tôi sẽ xử lý nó ngay
                                            sau khi chúng tôi nhìn thấy nó.
                                        </p>
                                        <p>
                                            Cám ơn bạn một lần nữa
                                        </p>
                                    </div>
                                    <div className="tab-pane fade show active" id="tab-pane-2">
                                        <h4 class="mb-3">Additional Information</h4>
                                        <p>
                                            Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
                                            Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero
                                            diam ea vero et dolore rebum, dolor rebum eirmod consetetur
                                            invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd
                                            ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod.
                                            Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut
                                            diam consetetur duo justo est, sit sanctus diam tempor aliquyam
                                            eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at
                                            sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr
                                            sanctus eirmod takimata dolor ea invidunt.
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item px-0">
                                                        Trọng lượng
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Kích thước
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Nơi Bán
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Kích thước
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Cổ áo
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Kiểu cổ áo
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Phong cách
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Xuất xứ
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Kiểu cổ tay áo
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Chất liệu
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Màu sắc
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Chiều dài tay áo
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Rất lớn
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Dịp
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Địa chỉ tổ chức chịu trách nhiệm sản xuất
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Tên tổ chức chịu trách nhiệm sản xuất
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item px-0">
                                                        10 kg
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        10 x 10 x 10 cm
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Hà Nội
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        <a href="https://hazomi.com/kich-thuoc/2xl/" rel="tag">2XL</a>, <a
                                                            href="https://hazomi.com/kich-thuoc/l/" rel="tag">L</a>, <a
                                                                href="https://hazomi.com/kich-thuoc/m/" rel="tag">M</a>, <a
                                                                    href="https://hazomi.com/kich-thuoc/xl/" rel="tag">XL</a>
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Cổ sơ mi
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Spread Collar
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Hàn Quốc
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Việt Nam
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Barrel Cuff
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Khác
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Khác
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Dài tay
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Không
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Hằng Ngày
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        My Thượng, Thanh Mai, Thanh Oai, Hà Nội
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Xưởng May Anh Châu
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show active" id="tab-pane-3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4 className="mb-4">1 nhận xét "Áo sơ mi sành điệu đầy màu sắc"</h4>
                                                <div className="media mb-4">
                                                    <img src={require('../../img/user.jpg')} alt="Image"
                                                        className="img-fluid mr-3 mt-1"
                                                        style={{ width: '45px' }} />
                                                    <div className="media-body">
                                                        <h6>
                                                            Việt Hùng<small> - <i>28 11 2022</i></small>
                                                        </h6>
                                                        <div className="text-primary mb-2">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star-half-alt"></i>
                                                            <i className="far fa-star"></i>
                                                        </div>
                                                        <p>
                                                            Sản phẩm rất chất lượng, nice!!!!!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h4 className="mb-4">Để lại bình luận</h4>
                                                <small>Your email address will not be published. Required fields
                                                    are marked *</small>
                                                <div className="d-flex my-3">
                                                    <p className="mb-0 mr-2">Đánh giá của bạn * :</p>
                                                    <div className="text-primary">
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                </div>
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="message">Đánh giá *</label>
                                                        <textarea id="message"
                                                            cols="30"
                                                            rows="5"
                                                            className="form-control">
                                                        </textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Tên của bạn *</label>
                                                        <input type="text" className="form-control" id="name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email *</label>
                                                        <input type="email" className="form-control" id="email" />
                                                    </div>
                                                    <div className="form-group mb-0">
                                                        <input type="submit" value="Để lại đánh giá của bạn"
                                                            className="btn btn-primary px-3" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </p>
            )}
        </>
    );
}

export default ProductDetail;