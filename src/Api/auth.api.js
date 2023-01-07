import axios from "axios";
import {
    hiddenSignUp,
    loginStart,
    loginSuccess,
    loginError,
    signUpError,
    signUpStart,
    signUpSuccess,
    hiddenLogin,
    logout
} from "../Redux/auth.slice";

const baseURL = "https://api-admin-dype.onrender.com/api"

export const loginUser = async (dataLoginObj, dispatch, swal) => {
    dispatch(loginStart());
    await axios.post(`${baseURL}/login`, dataLoginObj)
        .then((response) => {
            const account = response.data.user;
            const token = response.data.access_token;
            console.log(response.data);
            dispatch(loginSuccess(response.data));
            localStorage.setItem("userLoggedIn", JSON.stringify(account));
            localStorage.setItem("access_token", JSON.stringify(token));
        })
        .then(() => {
            dispatch(hiddenLogin());
        })
        .catch((err) => {
            console.log(err);
            dispatch(loginError("Email or password invalid. Please try again!"));
            swal({
                icon: "error",
                title: "Failed!",
                text: "Email or password invalid. Please try again!",
            })
        });
}

export const signUpUser = async (dataSignUpObj, dispatch, swal) => {
    dispatch(signUpStart());
    axios.post(`${baseURL}/user/user`, dataSignUpObj)
        .then((response) => {
            console.log(response);
            dispatch(signUpSuccess("Sign up successfully!"));
            swal({
                icon: "success",
                title: "Sign up!",
                text: "Sign up successfully!",
            }).then(() => {
                dispatch(hiddenSignUp());
            })
        })
        .catch(err => {
            console.log(err);
            dispatch(signUpError("Sign up failed!"));
            swal({
                icon: "error",
                title: "Failed!",
                text: "Sign up failed!",
            }).then(() => {
                dispatch(hiddenSignUp());
            })
        })
}


export const logOutUser = (dispatch, navigate) => {
    localStorage.clear();
    dispatch(logout());
    navigate('/');
}