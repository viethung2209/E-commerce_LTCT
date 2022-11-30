const Categories = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4"  style={{padding:'30px'}}>
                        <p className="text-right">15 Sản phẩm</p>
                        <a href="src/Component/Home/Categories" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={require('../../img/cat-1.jpg')} alt=""/>
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Thời trang nam</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4"  style={{padding:'30px'}}>
                        <p className="text-right">15 Sản phẩm</p>
                        <a href="src/Component/Home/Categories" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={require('../../img/cat-2.jpg')} alt=""/>
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Thời trang nữ</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4"  style={{padding:'30px'}}>
                        <p className="text-right">15 Sản phẩm</p>
                        <a href="src/Component/Home/Categories" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={require('../../img/cat-3.jpg')} alt=""/>
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Thời trang trẻ em</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4"  style={{padding:'30px'}}>
                        <p className="text-right">15 Sản phẩm</p>
                        <a href="src/Component/Home/Categories" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={require('../../img/cat-4.jpg')} alt=""/>
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Máy ảnh & Máy quay phim</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4" style={{padding:'30px'}}>
                        <p className="text-right">15 Sản phẩm</p>
                        <a href="src/Component/Home/Categories" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={require('../../img/cat-5.jpg')} alt=""/>
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Túi xách</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4" style={{padding:'30px'}}>
                        <p className="text-right">15 Sản phẩm</p>
                        <a href="src/Component/Home/Categories" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={require('../../img/cat-6.jpg')} alt=""/>
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Giày dép</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;