export const setFavorites = payload => ({
    type: 'SET_FAVORITE',
    payload,
    });
export const deleteFavorites = (payload) => ({
    type: 'DELETE_FAVORITE',
    payload
    }); 
export const putMovies = (payload) => ({
    type: 'PUT_MOVIES',
    payload
    });   