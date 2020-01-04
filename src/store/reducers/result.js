import * as actionTypes from '../actions/action';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), val: action.result })
            }
        case 'DELETE_RESULT':
            const updatedArray = state.results.filter((result) => result.id !== action.resultElementId);
            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
};

export default reducer;