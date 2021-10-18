import { useState } from 'react'

function Comentarios() {
    const [name, setNameC] = useState('');
    const [ComentarioAgregado, setComentarioAgregado] = useState('')
    const [isAddC, setBooleanComentario] = useState(false)

    const handleNameC = (event) => {
        setNameC(event.target.value)
        setBooleanComentario(false)
    }

    const handleFormSubmitC = (event) => {
        event.preventDefault()
        setComentarioAgregado(name)
        setBooleanComentario(true)
    }

  return (
    <div className="">
        <h1>Agregar comentarios</h1>
        <form onSubmit={handleFormSubmitC}>
            <input type="text" value={name} onChange={handleNameC}></input>
            <button type="submit">Enviar</button>
        </form>
        {isAddC && <p>Comentario agregado: {ComentarioAgregado}</p>} 
    </div>

  );
}

export default Comentarios;