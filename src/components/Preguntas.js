import React,{Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types'

const Preguntas = ({guardarPresupuesto,guardarRestante,actualizarPregunta}) => {
    const [cantidad,guardarCantidad] = useState(0);
    const [error,guardarError] = useState(false);
    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value));
    }

    const agregarPresupuesto = e => {
        e.preventDefault();
        if(cantidad <= 0 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {
                error ? <Error mensaje="El presupuesto es incorrecto" /> : null 
            }
            <form
                onSubmit={agregarPresupuesto}
                >
                <input type="number" className="u-full-width" placeholder="Coloca tu presupuesto"
                onChange={definirPresupuesto}
                />
                <input type="submit" className="button-primary u-full-width"/>

            </form>
        </Fragment>
     );
}
Preguntas.protoType = {
    guardarPresupuesto : PropTypes.func.isRequired,
    guardarRestante : PropTypes.func.isRequired,
    actualizarPregunta : PropTypes.func.isRequired
}
export default Preguntas;