import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const Navbar = () => {
    const { store, actions } = useContext(Context);
    const { favorites } = store;
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
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/favorites">My Favorites</Link>
                            </li> */}
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown ">
                                <a className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    Favorites
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                                    {favorites.length > 0 ?
                                        favorites.map((object, i) =>
                                            <li key={i}><div className="d-flex justify-content-between m-2"><span>{object}</span><i className="fas fa-times p-2" onClick={() => actions.removeFavorite(object)}></i></div></li>)
                                        :
                                        <li><div className="d-flex justify-content-between m-2"><span>Empty List</span></div></li>
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
