import React from 'react';
import Featured from "./Featured";
import Categories from "./Categories";
import Offer from "./Offer";
import TrandyProducts from "./TrandyProducts";
import Subscribe from "./Subscribe";
import JustArrivedProducts from "./JustArrivedProducts";
import Vendor from "./Vendor";

function Home(props) {
    return (
        <>
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{height: "410px"}}>
                        <img className="img-fluid" src={require('../../img/carousel-1.jpg')} alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "700px"}}>
                                <h4 className="text-light text-uppercase font-weight-medium mb-3">10%
                                    Off Your First Order</h4>
                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable
                                    Dress</h3>
                                <a href="src/Component/Dashboard/Navbar" className="btn btn-light py-2 px-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{height: "410px"}}>
                        <img className="img-fluid" src={require("../../img/carousel-2.jpg")} alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "700px"}}>
                                <h4 className="text-light text-uppercase font-weight-medium mb-3">10%
                                    Off Your First Order</h4>
                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable
                                    Price</h3>
                                <a href="src/Component/Dashboard/Navbar" className="btn btn-light py-2 px-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="src/Component/Dashboard/Navbar#header-carousel" data-slide="prev">
                    <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="src/Component/Dashboard/Navbar#header-carousel" data-slide="next">
                    <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div>
            <Featured/>
            <Categories/>
            <Offer/>
            <TrandyProducts/>
            <Subscribe/>
            <JustArrivedProducts/>
            <Vendor/>
        </>
    );
}

export default Home;