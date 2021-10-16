import { useState } from 'react'

function Autores() {
    const [name, setName] = useState('');
    const [autorAgregado, setAutorAgregado] = useState('')
    const [isAdd, setBooleanAutor] = useState(false)

    const handleName = (event) => {
        setName(event.target.value)
        setBooleanAutor(false)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        setAutorAgregado(name)
        setBooleanAutor(true)
    }

  return (
    <div className="">
        <h1>Agregar autores</h1>
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={name} onChange={handleName}></input>
            <button type="submit">Enviar</button>
        </form>
        {isAdd && <p>Autor agregado: {autorAgregado}</p>} 
    </div>

  );
}

export default Autores;