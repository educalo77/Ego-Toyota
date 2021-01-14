import Axios from 'axios';
import {GET_OTHER, GET_MODELS, GET_OTHER2 }from '../constants/constants';
import { getAllOthers } from '../services';


async function getAllModels(){
    return dispatch => {
        return Axios.get(`${process.env.REACT_APP_API}/models`)
            .then(res => res.data)
            .then(res => {
            dispatch({type: GET_MODELS, payload: res.data})
        })
        
    }
}

const getAllOther = (carId, id) => async (dispatch) => {
        const { data } = await Axios.get(`${process.env.REACT_APP_API}/otherdetails/` + carId + '/' + id);
    id === 1 ? (dispatch({ type: GET_OTHER, payload: data })) : (dispatch({ type: GET_OTHER2, payload: data }) )   
               
}

export { getAllModels, getAllOther };

