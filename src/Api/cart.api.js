import axios from "axios";

const baseURL_11 = "https://sp11-cart.000webhostapp.com/api";
const baseURL_15 = "https://nguyenletuananh.name.vn/laravel/public";
//SP_11
// export const addCart = async (request) => {
    
//     return await axios.post(`${baseURL_11}/carts_trans/add-to-cart.php`, request)
// }

//SP_15
//Thêm sản phẩm vào giỏ hàng
export const addCart = async (request) => {
    return await axios.post(`${baseURL_15}/AddtoCart`, request);
}

export const addCart1 = async (request) => {
    return await axios.get(`${baseURL_15}/AddtoCart1`, {
        params: {
            user_id: request.user_id,
            product_id: request.product_id,
            quantity: request.quantity
        }
    });
}

//Lấy thông tin giỏ hàng của người dùng theo user_id
export const getUserCartInfo = async (userId) => {
    return await axios.get(`${baseURL_15}/Api/Product-Cart/${userId}`);
}

export const updateQuantityProductApi = async (id, quantity, userId) => {
    return await axios.get(`${baseURL_15}/Save-Item-List-Cart/${id}/${quantity}`, {params: {user_id : userId}})
}

export const deleteQuantityProductApi = async (id, userId) => {
    return await axios.get(`${baseURL_15}/Delete-Item-List-Cart/${id}`, {params: {user_id : userId}})
}






