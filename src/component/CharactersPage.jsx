import React from "react";
import { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import Pagination from 'react-js-pagination';
import Card from './Card.jsx';
import Spinner from './Spinner.jsx';

const CharactersPage = () => {
    const { store, actions } = useContext(Context);
    const { people } = store;
    const [page, setPage] = useState(1);

    const handleChangePage = (pageNumber) => {
        setPage(pageNumber);
        actions.getPeople(`https://www.swapi.tech/api/people/?page=${pageNumber}&limit=9`);
    };
    return (
        <div className="row ">
            <div className="row mt-2">
                <div
                    className="col-md-12 d-flex align-content-center">
                    <p className="text-white display-6 mt-4">The Force is Strong with These Characters</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 d-flex justify-content-center pt-4 pb-3">
                    {
                        !!people &&
                            people.results.length > 0 ? (
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={9}
                                totalItemsCount={people.total_records}
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
                    !!people ?
                        <Card elements={people} imgroute="people" urlroute="characters" />
                        :
                        <Spinner />
                }
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center pt-4 pb-3">
                    {
                        !!people &&
                            people.results.length > 0 ? (
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={9}
                                totalItemsCount={people.total_records}
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
};
export default CharactersPage;