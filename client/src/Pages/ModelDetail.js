import { useParams } from 'react-router-dom';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Model from '../Components/Model';
import Carousel2 from '../Components/Carousel';
import OtherDetails from '../Components/OtherDetails';

//Code..
function ModelDetail(){
    const { id } = useParams();
    

    return (
        <React.Fragment>
            <Container>
                <Model id={id} />
            </Container>
            <Carousel2 id={id} />
            <OtherDetails id={id} />
        </React.Fragment>
    )
}

export default ModelDetail;
