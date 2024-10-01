import { eventWrapper } from '@testing-library/user-event/dist/utils'
import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    const [valor,setValor] = useState('')

    let valor = ''

    const aoDigitado = (evento) => {
        setValor(evento.target.value)
        console.log(valor)
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholderModificada}/>
        </div>
    )
}

export default CampoTexto