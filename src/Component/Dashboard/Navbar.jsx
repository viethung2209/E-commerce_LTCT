import React, { useState } from "react";
import {NavLink, Link} from "react-router-dom";
import Menu from "./Menu";

const Navbar = (props) => {

    const [show, setShow] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    {/*Menu*/}
                    <Menu/>
                    {/*Navbar*/}
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0 display-5 font-weight-semi-bold"><span
                                    className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                            </a>
                            <button type="button" className="navbar-toggler"
                                    onClick={()=>setShowNavbar(!showNavbar)}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={showNavbar ? "collapse navbar-collapse justify-content-between show" : "collapse navbar-collapse justify-content-between"} id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    
                                    <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                                    <NavLink to="/shop" className="nav-item nav-link">Shop</NavLink>
                                    <NavLink to="/shop-detail" className="nav-item nav-link">Shop Detail</NavLink>
                                    
                                    <div className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle"
                                           onClick={() => setShow(!show)}>Pages</Link>
                                        {show && <>
                                        <div className="dropdown-menu rounded-0 m-0" onClick={() => setShow(!show)}>
                                            <Link to="pages/shopping-card"
                                                className="dropdown-item"
                                            >Shopping Cart</Link>
                                            <Link to="pages/checkout"
                                                className="dropdown-item"
                                            >Checkout</Link>
                                        </div>
                                        </>}
                                    </div>
                                    
                                    <Link to="contact" className="nav-item nav-link">Contact</Link>
                                </div>
                                <div className="navbar-nav ml-auto py-0">
                                    <Link to="login" className="nav-item nav-link">Login</Link>
                                    <Link to="register" className="nav-item nav-link">Register</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;