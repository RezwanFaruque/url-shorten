import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Registration = () => {
    const [regdata, setRegData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const validationSchema = Yup.object({
        name: Yup.string().required("This field is required!"),

        email: Yup.string()
            .required("This field is required!")
            .email("Invalid Email!"),

        password: Yup.string()
            .required("This field is required!")
            .min(8, "Password must be atleast 8 character!"),

        confirm_password: Yup.string().test(
            "confirm_password",
            "Password must match!",
            function (value) {
                return this.parent.password === value;
            }
        ),
    });
    return (
        <Formik
            initialValues={regdata}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
            }}
        >
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <Form>
                            <div className="form-group">
                                <label>Name</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Name"
                                    name="name"
                                />
                                <ErrorMessage className="error" name="name" />
                            </div>
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

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <Field
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    name="confirm_password"
                                />
                                <ErrorMessage
                                    className="error"
                                    name="confirm_password"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </Form>
                    </div>
                    <div className="d-flex">
                        <span>Have an account?</span>

                        <Link to="/">Login</Link>
                    </div>
                </div>
            </div>
        </Formik>
    );
};

export default Registration;
