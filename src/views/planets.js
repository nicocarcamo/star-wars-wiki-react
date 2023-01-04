import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PlanetsPage from "../component/PlanetsPage.jsx";

export const Planets = props => {
	return (
        <div className="characters h-100 w-75 m-auto">
            <PlanetsPage />
			<Link to="/">
				<button className="btn btn-warning">Back Home</button>
			</Link>
		</div>
	);
};

Planets.propTypes = {
	match: PropTypes.object
};
