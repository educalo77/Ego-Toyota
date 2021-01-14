import { GET_MODELS, GET_OTHER, GET_OTHER2 } from '../constants/constants';


function modelsReducer(state = { details1: [], details2: [] }, action) {
    switch (action.type) {
        case GET_OTHER:
            return {
                ...state,
                details1: action.payload
            }
        case GET_OTHER2:
            return {
                ...state,
                details2: action.payload
            }

        default:
            return state
    }
}



export { modelsReducer };