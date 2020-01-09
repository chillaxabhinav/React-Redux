import * as actionTypes from './action';


export const saveResult = (result) => {
    const updatedResult = result * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: updatedResult
    }
}


export const storeResult = (result) => {
    return (dispatch,getState) => {
        setTimeout(() => {
            console.log('[mycurrent state] :' , getState().ctr.counter);
            dispatch(saveResult(result));
        }, 2000)
    }
};


export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElementId: id
    }
};
