import React from "react";
import Featured from "./Featured";
import Categories from "./Categories";
import Offer from "./Offer";
import TrendyProducts from "./TrendyProducts";
import Subscribe from "./Subscribe";
import JustArrivedProducts from "./JustArrivedProducts";
import Vendor from "./Vendor";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Home(props) {
  return (
    <>
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <Splide
            options={{
              type: 'loop',
              perPage: 1,
              rewind:true,
              pagination: false,
            }}
          >
            <SplideSlide>
              <div className="carousel-item active" style={{ height: "410px" }}>
                <img
                  className="img-fluid"
                  src={require("../../img/carousel-1.jpg")}
                  alt=""
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">
                      Giảm giá 10% cho đơn hàng đầu tiên
                    </h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                      Quần áo thời trang
                    </h3>
                    <a
                      href="src/Component/Dashboard/Navbar"
                      className="btn btn-light py-2 px-3"
                    >
                      Mua Ngay
                    </a>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="carousel-item active" style={{ height: "410px" }}>
                <img
                    className="img-fluid"
                    src={require("../../img/carousel-2.jpg")}
                    alt=""
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">
                    Giảm giá 10% cho đơn hàng đầu tiên
                    </h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                      Giá cả phải chăng
                    </h3>
                    <a
                        href="src/Component/Dashboard/Navbar"
                        className="btn btn-light py-2 px-3"
                    >
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        {/* <a className="carousel-control-prev" href="src/Component/Dashboard/Navbar#header-carousel" data-slide="prev">
                    <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="src/Component/Dashboard/Navbar#header-carousel" data-slide="next">
                    <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a> */}
      </div>
      <Featured />
      <Categories />
      <Offer />
      <TrendyProducts />
      <Subscribe />
      <JustArrivedProducts />
      <Vendor />
    </>
  );
}

export default Home;
