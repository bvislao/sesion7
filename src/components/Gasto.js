import React from 'react';
import PropTypes from 'prop-types'
const Gasto = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombre}
            <span className="gasto">$ {gasto.cantidad}</span>
        </p>
    </li>
)

Gasto.protoType = {
    gasto : PropTypes.array.isRequired
}
 
export default Gasto;