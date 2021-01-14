import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getOne} from '../Store/services';
import {Row,Col} from 'react-bootstrap';
import s from '../Styles/model.module.scss';

function Model({id}){

    const [model, setModel] = useState([])

    async function getModel(id){
        const data = await getOne(id)
        setModel(data)
}
    useEffect(() => {
        getModel(id);
    },[id]);

    return (
        <Row>
            {id === model.model && <Redirect to="/"/>}
            <Col md={6}>
                <img className={'img-fluid '+s['img-main']} src={model.img} alt={'Imagen principal de '+model.model} />
            </Col>
            <Col md={6}>
                <h2 className={s['model-title']}>{model.fullmodel}</h2>
                <h1 className={s['main-title']}>{model.slogan}</h1>
                <p className={s['short-description']}>
                    {model.description}
                </p>
            </Col>
        </Row>
    );
}


export default Model;