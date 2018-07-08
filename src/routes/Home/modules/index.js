import axios from 'axios';
import { handleActions, createAction } from 'redux-actions';

const fetchItunesAction = createAction('FETCH_ITUNES');

const fetchItunes = (info = 'estopa') => async (dispatch) => {
    const {data} = await axios.get(`https://itunes.apple.com/search?term=${info}`);
    dispatch({
        type: fetchItunesAction,
        payload: { music: [...data.results], lastFetch: Date.now() }
    })
}

export const actions = {
    fetchItunes
}

const initialState = {
    music: [],
    lastFetch: ''
}
export const musicReducer = handleActions({
    [fetchItunesAction]: (state, action) => ({
        music: [...action.payload.music],
        lastFetch: action.payload.lastFetch
    }),
}, {
    ...initialState
});