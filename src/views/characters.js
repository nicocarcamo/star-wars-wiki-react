import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CharactersPage from "../component/CharactersPage.jsx";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
        <div className="characters h-100 w-75 m-auto">
            <CharactersPage />
			<Link to="/">
				<button className="btn btn-secondary">Back home</button>
			</Link>
		</div>
	);
};
