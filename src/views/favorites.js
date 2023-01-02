import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
        <div className="characters h-100">
            <p>My Favorites</p>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
