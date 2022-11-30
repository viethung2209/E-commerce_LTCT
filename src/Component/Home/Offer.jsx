const Offer = () => {
    return (
        <div className="container-fluid offer pt-5">
            <div className="row px-xl-5">
                <div className="col-md-6 pb-4">
                    <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                        <img src={require('../../img/offer-1.png')} alt="offer-1"/>
                            <div className="position-relative" style={{zIndex:'1'}}>
                                <h5 className="text-uppercase text-primary mb-3">Giảm 20% tất cả các đơn hàng</h5>
                                <h1 className="mb-4 font-weight-semi-bold">Bộ sưu tập Xuân</h1>
                                <a href="src/Component/Home/Offer" className="btn btn-outline-primary py-md-2 px-md-3">Mua ngay</a>
                            </div>
                    </div>
                </div>
                <div className="col-md-6 pb-4">
                    <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                        <img src={require('../../img/offer-2.png')} alt="offer-2"/>
                            <div className="position-relative" style={{zIndex:'1'}}>
                                <h5 className="text-uppercase text-primary mb-3">Giảm 20% tất cả các đơn hàng</h5>
                                <h1 className="mb-4 font-weight-semi-bold">Bộ sưu tập Đông</h1>
                                <a href="src/Component/Home/Offer" className="btn btn-outline-primary py-md-2 px-md-3">Mua ngay</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;