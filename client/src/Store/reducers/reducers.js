import { GET_MODELS } from '../constants/constants';


export default function modelsReducer(state = { models: [] }, action) {
    switch (action.type) {
        case GET_MODELS:
                return {
                    models: action.payload
                };
        default:
            return state
    }
}