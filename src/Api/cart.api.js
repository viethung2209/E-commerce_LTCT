import axios from "axios";

const baseURL_11 = "https://sp11-cart.000webhostapp.com/api";
const baseURL_15 = "https://nguyenletuananh.name.vn/laravel/public";

//SP_11
// export const addCart = async (request) => {
    
//     return await axios.post(`${baseURL_11}/carts_trans/add-to-cart.php`, request)
// }


//SP_15
//Thêm sản phẩm vào giỏ hàng
export const addCart = async (request, productId) => {
    return await axios.get(`${baseURL_15}/AddtoCart/10`, request);
}

//Lấy thông tin giỏ hàng của người dùng theo user_id
export const getUserCartInfo = async (request) => {
    return await axios.get(`${baseURL_15}/Api/Product-Cart`, request);
}






