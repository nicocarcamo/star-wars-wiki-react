import React from "react";
import { Link } from "react-router-dom";
import CharactersPage from "../component/CharactersPage.jsx";

export const Characters = () => {
	
	return (
        <div className="characters h-100 w-75 m-auto">
            <CharactersPage />
			<Link to="/">
				<button className="btn btn-secondary">Back Home</button>
			</Link>
		</div>
	);
};
