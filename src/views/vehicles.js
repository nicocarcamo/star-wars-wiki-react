import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import VehiclesPage from '../component/VehiclesPage.jsx';
import { Context } from "../store/appContext";

export const Vehicles = () => {
	// const { store, actions } = useContext(Context);

	return (
        <div className="characters h-100 w-75 m-auto">
            <VehiclesPage />
			<Link to="/">
				<button className="btn btn-secondary">Back home</button>
			</Link>
		</div>
	);
};