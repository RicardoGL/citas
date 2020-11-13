import React,{ Fragment, useState    } from 'react';
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({crearCita}) => {

    //state citas
    const [cita,actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error,actualizarError] = useState(false);

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e => {
        e.preventDefault();
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''  ){
            actualizarError(true);
            return; 
        }else{ actualizarError(false)}

        cita.id = uuidv4();

        crearCita(cita);
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });

    }

    

    return (  
        <Fragment>
            { error?
                <p className="alerta-error">Todos los campos son obligatorios</p>
                :
                null
            }
           <h2>Crear Cita</h2> 
            <form
            onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState} 
                    value={sintomas}               
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>
           </form>
        </Fragment>
    );
}
 
export default Formulario;