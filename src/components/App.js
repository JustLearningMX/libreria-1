import { useState } from 'react'
import Autores from "./Autores";

function App() {
  const [isAdd, setIsAdd] = useState(false)
  const [textAddUpdate, setTextAddUpdate] = useState('Agregar autores')

  const handleAddAutor = (event) => {
    setIsAdd(!isAdd)
    if(isAdd){
      setTextAddUpdate('Agregar autores')
    }else{
      setTextAddUpdate('Ocultar agregar autores')
    }
  }


  return (
    <div className="App">

      <button onClick={handleAddAutor}>{textAddUpdate}</button>
      { isAdd && <Autores/>} 
    </div>
  );
}

export default App;