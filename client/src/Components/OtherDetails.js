import React, { useEffect, useMemo } from 'react';
import {Col} from 'react-bootstrap';
import s from '../Styles/mainDetail.module.scss';
import { getAllOther } from '../Store/actions/actions';
import { useSelector, useDispatch } from 'react-redux';


function OtherDetails(id) {
    
    const dispatch = useDispatch();

    const detalles1 = useSelector((state) => state.allModels.details1);
    const detalles2 = useSelector((state) => state.allModels.details2);

    const memoizedValue = useMemo(() => detalles1);
    const memoizedValue2 = useMemo(() => detalles2);

  useEffect(()=>{
    (async function(){
        dispatch(await getAllOther(1, 1))
    })()
  }, [])
    
     useEffect(()=>{
    (async function(){
        dispatch(await getAllOther(1, 2))
    })()
  }, [])
    

    return (
        <div className={s['container']}>
            <div className={s['first']}>
            {memoizedValue && memoizedValue.map((item) => {
            return    (
(            <React.Fragment>
            <Col md={6}>
            <div className={s['details-container']}>
                <h3 className={s['title']}>{item.description}</h3>
                <p className={s['description']}>{item.detail}</p>
            </div>
            </Col>
            <Col className="my-4" md={6}>
            <img src={item.img} className="img-fluid rounded" alt={'Imagen de ' + item.detail} />
            </Col>
            </React.Fragment> )
                )
            })} 
            </div>
            <div className={s['second']}>
                        {memoizedValue2 && memoizedValue2.map((item) => {
            return    (
                (<React.Fragment>
            <Col className="my-4" md={6}>
            <img src={item.img} className="img-fluid rounded" alt={'Imagen de ' + item.detail} />
            </Col> 
            <Col md={6}>
            <div className={s['details-container']}>
                <h3 className={s['title']}>{item.description}</h3>
                <p className={s['description']}>{item.detail}</p>
            </div>
            </Col>
            </React.Fragment> )
                            )
                        })}
            </div>    
        </div>
    );
}


export default OtherDetails;