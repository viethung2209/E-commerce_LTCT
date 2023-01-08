import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { GrClose } from "react-icons/gr"
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { hiddenLogin, showSignUp } from '../../../Redux/auth.slice';
import { loginUser } from '../../../Api/auth.api';
import Loading from '../../Loading/Loading';
import logoUser from "../../../img/user-128.png";
import swal from 'sweetalert';
import * as yup from 'yup';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const isShow = useSelector(state => state.auth.login.isShow);
    const isLoading = useSelector(state => state.auth.login.isLoading);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().email().required("Required"),
            password: yup.string().required("Required")
        }),
        onSubmit: (values) => {
            console.log(values);
            loginUser(values, dispatch, swal);
        }
    })

    return (
        <>{
            isShow && (
                <div className="login-container">
                    <form className="login-form" onSubmit={formik.handleSubmit}>
                        <span id="close-icon" onClick={() => dispatch(hiddenLogin())}><GrClose /></span>
                        <div className="login-header">
                            <h2>Login</h2>
                            <img src={logoUser} alt="" />
                        </div>
                        <div className="login-body">
                            <div className="input-container">
                                <label className="label-login">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input-login"
                                    placeholder="Enter your email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="input-container">
                                <label className="label-login">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="input-login"
                                    placeholder="Enter your password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                <span
                                    className="eye-icon"
                                    onClick={() => handleShowPassword()}
                                >
                                    {
                                        showPassword ?
                                            <AiFillEye />
                                            :
                                            <AiFillEyeInvisible />
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="login-footer">
                            <button
                                id="btn-login" type="submit"
                            >
                                Login
                            </button>
                            <span>Forgot <Link to="">Username/Password</Link> ?</span>
                            <span>Don't have an account? <Link onClick={() => {
                                dispatch(hiddenLogin());
                                dispatch(showSignUp());
                            }}>Sign up</Link></span>
                        </div>
                    </form>
                </div>
            )
        }
            <Loading isLoading={isLoading} />
        </>
    )
}

export default Login