import {Link} from "react-router-dom";

const TopBar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-secondary py-2 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-dark" href="src/Component/Dashboard/TopBar">FAQs</a>
                            <span className="text-muted px-2">|</span>
                            <a className="text-dark" href="src/Component/Dashboard/TopBar">Help</a>
                            <span className="text-muted px-2">|</span>
                            <a className="text-dark" href="src/Component/Dashboard/TopBar">Support</a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-dark px-2" href="src/Component/Dashboard/TopBar">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="src/Component/Dashboard/TopBar">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="src/Component/Dashboard/TopBar">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-dark px-2" href="src/Component/Dashboard/TopBar">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="text-dark pl-2" href="src/Component/Dashboard/TopBar">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <Link to="/" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span
                                className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-6 text-left">
                        <form action="src/Component/Dashboard/TopBar">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products"/>
                                    <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"></i>
                            </span>
                                    </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        <a href="src/Component/Dashboard/TopBar" className="btn border">
                            <i className="fas fa-heart text-primary"></i>
                            <span className="badge">0</span>
                        </a>
                        {" "}
                        <a href="src/Component/Dashboard/TopBar" className="btn border">
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span className="badge">0</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
)
}

export default  TopBar;