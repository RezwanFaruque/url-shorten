import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
const Login = () => {
    const [logindata, setLoginData] = useState({
        email: "",
        password: "",
    });

    const navigation = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string()
            .required("This field is required!")
            .email("Invalid Email!"),
        password: Yup.string()
            .required("This field is required!")
            .min(8, "Password must be atleast 8 character!"),
    });

    const handlelogin = (values) => {
        axios
            .post("http://127.0.0.1:8000/api/login", values)
            .then((response) => {
                console.log(response);
                if (response.data.status == "success") {
                    localStorage.setItem("Token", response.data.token);
                    navigation("/url-shorten");
                }
            })
            .catch((error) => {});
    };

    return (
        <Formik
            initialValues={logindata}
            validationSchema={validationSchema}
            onSubmit={handlelogin}
        >
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <Form>
                            <div className="form-group">
                                <label>Email address</label>
                                <Field
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    name="email"
                                />
                                <ErrorMessage className="error" name="email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <Field
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    name="password"
                                />
                                <ErrorMessage
                                    className="error"
                                    name="password"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                login
                            </button>
                        </Form>
                    </div>
                    <div className="d-flex">
                        <span>Don't have an account?</span>

                        <Link to="/registration">Registration</Link>
                    </div>
                </div>
            </div>
        </Formik>
    );
};

export default Login;
