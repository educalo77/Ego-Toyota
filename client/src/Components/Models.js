import React, { useEffect, useState } from 'react';
import ModelCard from './ModelCard';
import { Row } from 'react-bootstrap';
// import { useSelector, useDispatch } from "react-redux";
// import { getAllModels } from '../Store/actions/actions';
import {getAll} from '../Store/services';



function Models() {

    const [models, setModels] = useState([])

    async function getAllModels(){
    const data = await getAll()
    setModels(data)
    
}
    useEffect(() => {
        getAllModels();
    },[]);

    return (
        <div>
        <Row>
            {models && models.map(item => (
                <ModelCard key={item.id} data={item} />
            ))}
        </Row>
        </div>
    )
}

export default Models
