import React from "react";
import { useContext, useState } from 'react'; // eslint-disable-next-line
import { Context } from '../store/appContext'; // eslint-disable-next-line
import Pagination from 'react-js-pagination';
import Card from './Card.jsx';
import Spinner from './Spinner.jsx';

const PlanetsPage = () => {
    const { store, actions } = useContext(Context);
    const { planets } = store;
    const [page, setPage] = useState(1);

    const handleChangePage = (pageNumber) => {
        setPage(pageNumber);
        actions.getPlanets(`https://www.swapi.tech/api/planets/?page=${pageNumber}&limit=9`);
    };
    return (
        <div className="row">
            <div className="row mt-2">
                <div
                    className="col-md-12 d-flex align-content-center">
                    <p className="text-white display-6 mt-4">Explore the Galactic World of Star Wars Planets</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center pt-4 pb-3">
                    {
                        !!planets &&
                            planets.results.length > 0 ? (
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={9}
                                totalItemsCount={planets.total_records}
                                onChange={handleChangePage}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        ) : ("")
                    }
                </div>
            </div>

            <div className="row bg-custom rounded-3 py-1">
                {
                    !!planets ?
                        <Card elements={planets} imgroute="planets" urlroute="planets" />
                        :
                        <Spinner />
                }
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center pt-4 pb-3">
                    {
                        !!planets &&
                            planets.results.length > 0 ? (
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={9}
                                totalItemsCount={planets.total_records}
                                onChange={handleChangePage}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        ) : ("")
                    }
                </div>
            </div>
        </div>
    );
}
export default PlanetsPage;