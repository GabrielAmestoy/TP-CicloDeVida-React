import React from 'react';
import PropTypes from 'prop-types';

const Metrica = ({titulo, color, cifra, icono}) => {
    return (
            <div className="col-md-4 mb-4">
                <div className={`card border-left-${color} shadow h-100 py-2`}> 
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{titulo}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{cifra}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas ${icono} fa-2x text-gray-300`}></i>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

Metrica.propTypes = {
    titulo : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    cifra : PropTypes.number.isRequired,
    icono : PropTypes.string.isRequired,
}
Metrica.defaultProps = {
    titulo : "titulo por defecto",
    color : 'secondary',
    cifra : 10,
    icono : 'fa-user',
}
export default Metrica;