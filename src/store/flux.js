const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: null,
            character: null,
            planets: null,
            planet: null,
            vehicles: null,
            vehicle: null,
            error: null,
            favorites: [],
        },
        actions: {
            getPeople: async (url, options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }) => {
                try {
                    const response = await fetch(url, options);
                    if (response.status !== 200) {
                        throw new Error({ message: 'Error fetching Characters.' })
                    }
                    const data = await response.json();
                    setStore({
                        people: data
                    });
                } catch (error) {
                    setStore({
                        error: error.message
                    });
                }
            },
            getPlanets: async (url, options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }) => {
                try {
                    const response = await fetch(url, options);
                    if (response.status !== 200) throw new Error({ message: 'Error fetching Planets' })
                    const data = await response.json();
                    setStore({
                        planets: data
                    });
                } catch (error) {
                    setStore({
                        error: error.message
                    });
                }
            },
            getVehicles: async (url, options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }) => {
                try {
                    const response = await fetch(url, options);
                    if (response.status !== 200) throw new Error("Error fetching Vehicles")
                    const data = await response.json();
                    setStore({
                        vehicles: data
                    })
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            getCharacter: async (url, options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }) => {
                try {
                    const response = await fetch(url, options);
                    if (response.status !== 200) throw new Error("Error fetching homeworld");
                    const data = await response.json();
                    let getHomeworld = async (url, options = {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }) => {
                        try {
                            const response = await fetch(url, options);
                            if (response.status !== 200) throw new Error("Error API");
                            const data = await response.json();
                            return data;
                        } catch (error) {
                            setStore({
                                error: error.message
                            })
                        }
                    }
                    let home = await getHomeworld(data.result.properties.homeworld);
                    setStore({
                        character: { data: data, planet: home }
                    });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            getPlanet: async (url, options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }) => {
                try {
                    const response = await fetch(url, options);
                    if (response.status !== 200) throw new Error("Error fetching Planet");
                    const data = await response.json();
                    setStore({
                        planet: data
                    });
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            getVehicle: async (url, options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }) => {
                try {
                    const response = await fetch(url, options);
                    if (response.status !== 200) throw new Error("Error fetching Vehicle");
                    const data = await response.json();
                    setStore({
                        vehicle: data
                    })
                } catch (error) {
                    setStore({
                        error: error.message
                    })
                }
            },
            addFavorite: (element) => {
                let { favorites } = getStore();
                favorites.push(element);
                setStore({ 
                    favorites
                 });
            },
            removeFavorite: (element) => {
                let { favorites } = getStore();
                let newFavorites = favorites.filter(item=>item!==element);
                setStore({
                    favorites: newFavorites
                });
            }
        }
    }
}

export default getState;
