import Axios from 'axios';


export async function getAllModels(){
    return dispatch => {
        Axios.get(`${process.env.REACT_APP_API}/models`)
            .then(res => res.data)
            .then(res => {
                console.log('hola')
            dispatch({type: "GET_MODELS", payload: res.data})
        })
        
    }
}

// const getAllModels = () => async (dispatch) => {
//     const data = await getAll()
//     console.log(data)
//      dispatch({type:"GET_MODELS" , payload:data})
// }

// export { getAllModels };

// export function getModels(){ //{vehicleId, orderBy, orderDirection}
//     let uriParams = queryString.stringify(data); // se combierte el objeto un string url.
//     console.log(uriParams)
//     return dispatch => {
//         Axios.get(API_URI + '?' + uriParams)
//         .then(res => res.data)
//         .then(res => {
//             dispatch({type:GET_MODELS,payload:res.data});
//         })
//     }
// }