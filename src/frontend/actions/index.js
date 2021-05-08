export const setFavorites = payload => ({
    type: 'SET_FAVORITE',
    payload,
    });
export const deleteFavorites = (payload) => ({
    type: 'DELETE_FAVORITE',
    payload
    }); 
export const putPopularMovies = (payload) => ({
    type: 'PUT_POPULAR',
    payload
    });   
export const putKidsMovies = (payload) => ({
    type: 'PUT_KIDS',
    payload
    });  
export const putRatedMovies = (payload) => ({
    type: 'PUT_RATED',
    payload
    }); 
export const putComedyMovies = (payload) => ({
    type: 'PUT_COMEDY',
    payload
    }); 
export const putSeachData = (payload) => ({
    type: 'PUT_DATA',
    payload
    });
export const registerSubmit = (payload) => ({
    type: 'REGISTER_SUBMIT',
    payload
    });