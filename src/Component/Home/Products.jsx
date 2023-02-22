import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../../Api/cart.api';
import { showLogin } from '../../Redux/auth.slice';

const Products = ({ productList }) => {
  const currentUser = useSelector(state => state.auth.login.currentUser);
  const dispatch = useDispatch();

  async function addToCart(productId) {
    if (!currentUser) {
      dispatch(showLogin());
    }

    console.log(productId)
    let request = {
      user_id: currentUser.id,
      // product_id: productId,
      // quantity: 1,
    }
    await addCart(JSON.stringify(request), productId);
    console.log(productId)
    console.log(currentUser.id)
    console.log("Add to Cart")
  }

  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">SẢN PHẨM NỔI BẬT</span></h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {productList.map((product, index) => {
          if(product.quantity !== null)
          return (
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={index}>
            <div className="card product-item border-0 mb-4">
              <div
                className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={product.sub_products.length !== 0? product.sub_products[0].image_url : null} alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{product.name}</h6>
                <div className="d-flex justify-content-center">
                  <h6>{product.sale_price} VND</h6>
                  <h6 className="text-muted ml-2">
                    {/* <del>$123.00</del> */}
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to={`/product-detail/${product.id}`} className="btn btn-sm text-dark p-0"><i
                  className="fas fa-eye text-primary mr-1"></i>Xem chi tiết</Link>
                <Link to="/pages/shopping-card" onClick={() => addToCart(product.id)}  className="btn btn-sm text-dark p-0"><i
                  className="fas fa-shopping-cart text-primary mr-1"></i>Thêm vào giỏ hàng</Link>
              </div>
            </div>
          </div>
        )
})}
      </div>
    </div>
  )
}

export default Products