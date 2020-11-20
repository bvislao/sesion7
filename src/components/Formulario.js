import React, {useState} from 'react';
import Error from './Error';
import  shortid from 'shortid'
import PropTypes from 'prop-types'

const Formulario = ({guardarGasto,guardarCrearGasto,restante}) => {

    const [nombre,guardarNombre] = useState('');
    const [cantidad,guardarCantidad] = useState(0);
    const [error,guardarError] = useState(0);
    const [errorpresupuesto,guardarErrorPresupuesto] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();
        if(nombre.trim() == ''){
            guardarError(true);
            return
        }
        if(cantidad <= 0 || isNaN(cantidad) ){
            guardarError(true);
            return
        }
        guardarError(false);
        if(cantidad > restante){
            guardarErrorPresupuesto(true);
            return;
        }
        guardarErrorPresupuesto(false);

        const gastos = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        guardarGasto(gastos);
        guardarCrearGasto(true);
        guardarNombre('');
        guardarCantidad(0);
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregar tus gastos aquí</h2>
            {
                error ? <Error mensaje="Ingrese los campos validos" /> : null
            }
            <div className="campo">
                <label>Nombre de Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e=> guardarNombre(e.target.value)}
                />
                <label>Monto Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e=> guardarCantidad(parseInt(e.target.value,10))}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar Gasto"
                />
                {
                errorpresupuesto ? <Error mensaje="Ya no tiene saldo para agregar presupuesto o supera el monto permitido" /> : null
                }
            </div>
        </form>

      );
}

Formulario.protoType = {
    guardarGasto : PropTypes.func.isRequired,
    guardarCrearGasto : PropTypes.func.isRequired,
    restante : PropTypes.number.isRequired
}
 
export default Formulario;