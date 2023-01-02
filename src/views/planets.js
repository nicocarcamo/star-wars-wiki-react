import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PlanetsPage from "../component/PlanetsPage.jsx";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
        <div className="characters h-100 w-75 m-auto">
            <PlanetsPage />
			<Link to="/">
				<button className="btn btn-secondary">Back home</button>
			</Link>
		</div>
	);
};

Planets.propTypes = {
	match: PropTypes.object
};
