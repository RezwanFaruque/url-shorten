import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import ShortenUrl from "../pages/shortenurl/ShortenUrl";

const Routers = () => {
    return (
        <Routes>
            <Route exact path="/url-shorten" element={<ShortenUrl />} />

            <Route exact path="/" element={<Login />} />
            <Route exact path="/registration" element={<Registration />} />
        </Routes>
    );
};

export default Routers;
