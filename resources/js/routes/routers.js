import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
    );
};

export default Routers;
