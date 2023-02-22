import axios from "axios";

//SP_11
export const addCart = async (request) => {
    
    return await axios.post("https://sp11-cart.000webhostapp.com/api/carts_trans/add-to-cart.php", request)
}


//SP_15
export const addCart15 = async (request) => {

}






