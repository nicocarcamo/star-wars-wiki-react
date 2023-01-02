import React from "react";
import { createContext, useEffect, useState } from 'react';
import getState from './flux';
export const Context = createContext(null);

const injectContext = (PassedComponent) => {
    const StoreWrapper = props => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }));
        useEffect(() => {
            state.actions.getPeople('https://www.swapi.tech/api/people?page=1&limit=9',{});
            state.actions.getPlanets('https://www.swapi.tech/api/planets?page=1&limit=9',{});
            state.actions.getVehicles('https://www.swapi.tech/api/vehicles?page=1&limit=9',{});
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );

    }
    return StoreWrapper;
}

export default injectContext;
