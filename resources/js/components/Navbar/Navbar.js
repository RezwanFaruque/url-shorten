import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigation = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("Token");
        navigation("/");
    };
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                Url Shorten
            </a>
            {localStorage.getItem("Token") ? (
                <button onClick={handleLogout}>logout</button>
            ) : (
                ""
            )}
        </nav>
    );
};

export default Navbar;
