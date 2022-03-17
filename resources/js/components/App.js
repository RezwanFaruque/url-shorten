import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routers from "../routes/routers";
import Navbar from "./Navbar/Navbar";

function App() {
    return (
        <>
            <Navbar />

            <Routers />
        </>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
    );
}
