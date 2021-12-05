import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import MakeCommentCard from './MakeCommentCard';
import { requestApi } from "../../utils/httpClient"; //Peticiones a la API

export default function Modal({ openModal, handleClickCloseModal, libroTitle, linkCoverBookLarge, libroId, setErrorMsg, setSnackBar, setalertSeverity }) {
  const [botonGuardarDisabled, setBotonGuardarDisabled] = useState(true);
  const [usersComments, setUsersComments] = useState({"libro_id": libroId});
  const [saveComments, setSaveComments] = useState(false);

  const handleClickGuardarBtn = () => {
    // console.log(JSON.stringify(usersComments));
    setBotonGuardarDisabled(true);//Desactivamos botón guardar
    handleClickCloseModal();//Cerramos la ventana modal
    setSaveComments(true); //Se guardan los datos del usuario    
  };

  const handleClickCancelarBtn = () => {
    setBotonGuardarDisabled(true);//Desactivamos botón guardar
    handleClickCloseModal();
    setUsersComments({"libro_id": libroId});
  };  

  //Efecto para guardar los comentarios
  useEffect(()=>{
    if(saveComments){
      const path = `/comentarios/`; //path para agregar un comentario a la API
      requestApi(path, "POST", usersComments).then((data) => {
        //Se recibe el JSON con los datos de la petición
        // console.log(data.error);
        if(data.error) { 
          setalertSeverity("error");
          setErrorMsg("Hubo un error, no se pudo guardar el comentario");          
        } else {
          setalertSeverity("success");
           setErrorMsg("Comentario guardado exitosamente");
        }

        setSnackBar(true);
        setSaveComments(false);
        setUsersComments({"libro_id": libroId});//Limpiamos los comentarios del usuario      
      });
    }
  }, [saveComments]);

  return (
    
      <Dialog        
        open={openModal}
        onClose={handleClickCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ paddingBottom: 0}}>
          {`¿Qué te ha parecido el libro "${libroTitle}"`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ paddingBottom: "5px"}}>
            Ingresa tus datos y deja tus comentarios para que otros lectores conozcan tu opinión.
          </DialogContentText>
          <MakeCommentCard 
            linkCoverBookLarge={linkCoverBookLarge} 
            setBotonGuardarDisabled={setBotonGuardarDisabled} 
            setUsersComments={setUsersComments}
            usersComments={usersComments}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickCancelarBtn}>Cancelar</Button>
          <Button onClick={handleClickGuardarBtn} autoFocus disabled={botonGuardarDisabled}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
  );
}