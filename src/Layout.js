import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Characters } from "./views/characters";
import { Planets } from "./views/planets";
import { Vehicles } from "./views/vehicles";
import { Favorites } from "./views/favorites";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";


function Layout() {

	const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="*" element={<h1>Not found, may the force be with you...</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>

    </div>
  );
}

export default injectContext(Layout);
