import axios from "axios";

export const addCart = async (request) => {
    //post api with json body
    return await axios.post("https://sp11-cart.000webhostapp.com/api/carts_trans/add-to-cart.php", request)
}