import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="w-75 m-auto d-flex">
                    <Link className="navbar-brand ms-3" to="/">STAR WARS WIKI</Link>
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">

                            <li className="nav-item">
                                <Link className="nav-link" to="/characters">Characters</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/vehicles">Vehicles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/planets">Planets</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/favorites">My Favorites</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
