import React from "react";
import { Link } from "react-router-dom";
import VehiclesPage from '../component/VehiclesPage.jsx';


export const Vehicles = () => {

	return (
        <div className="h-100 w-75 m-auto">
            <VehiclesPage />
			<Link to="/">
				<button className="btn btn-warning">Back Home</button>
			</Link>
		</div>
	);
};