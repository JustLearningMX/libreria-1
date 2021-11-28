import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import MakeCommentCard from './MakeCommentCard';

export default function Modal({ openModal, handleClickCloseModal, libroTitle, linkCoverBookLarge }) {
  const [botonGuardar, setBotonGuardar] = useState(true);

  const handleClickGuardarBtn = () => {
    setBotonGuardar(true);
    handleClickCloseModal();
  };

  const handleClickCancelarBtn = () => {
    setBotonGuardar(true);
    handleClickCloseModal();
  };

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
          <MakeCommentCard linkCoverBookLarge={linkCoverBookLarge} setBotonGuardar={setBotonGuardar} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickCancelarBtn}>Cancelar</Button>
          <Button onClick={handleClickGuardarBtn} autoFocus disabled={botonGuardar}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
  );
}