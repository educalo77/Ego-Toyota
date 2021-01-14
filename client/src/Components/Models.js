import React, { useEffect, useState } from 'react';
import ModelCard from './ModelCard';
import { Row } from 'react-bootstrap';
// import { useSelector, useDispatch } from "react-redux";
// import { getAllModels } from '../Store/actions/actions';
import getAll from '../Store/services';



function Models() {
    
    // const allModels = useSelector((state) => state.allModels);
    // const { models } = allModels;

    const [models, setModels] = useState([])

    async function getAllModels(){
        const data = await getAll()
        console.log(data)
    setModels(data)
    
}
    
    console.log(models)

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
