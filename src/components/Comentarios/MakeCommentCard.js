import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { TextField, FormControl, Alert, Snackbar  } from '@mui/material';
import { useState } from "react";

export default function MakeCommentCard({ linkCoverBookLarge, setBotonGuardarDisabled, usersComments, setUsersComments }) {

  const [snackbar, setSnackBar] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleBlurTexto = (e, campo) => {
    const textValue = e.target.value;      

    if(textValue.trim().length <= 0){
      setBotonGuardarDisabled(true);//Desactivamos el botón guardar
      setErrorMsg(`¡El ${campo} no puede ir vacío!`);
      setSnackBar(true);
    }
  };

  const handleChangeTexto = (e, campo) => {
    const textValue = e.target.value;

      setUsersComments({
        ...usersComments,
        "texto": textValue,
      });

    if (usersComments.texto && textValue.trim().length > 0){    
      setBotonGuardarDisabled(false);//Activamos el botón guardar
    }
  };

  const closeSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar(false);
  };

  return (
    <Card sx={{ width: "auto"}}>
      <CardMedia
        component="img"
        height="130"
        image={linkCoverBookLarge}
        alt="book cover"
      />
      <CardContent sx={{display: "flex", flexDirection: "column"}}>
        <FormControl>
          <TextField
            size="small" 
            id="outlined-textarea"
            label="Comentarios"
            placeholder="Que te ha parecido el libro"
            multiline
            rows={4}
            variant="outlined"
            required={true}
            onChange={(e)=>handleChangeTexto(e, 'Comentario')} //Guardar
            onBlur={(e)=>handleBlurTexto(e, 'Comentario')} //Verificar
          />
        </FormControl>
        <Snackbar open={snackbar} autoHideDuration={6000} onClose={closeSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={closeSnackbar} severity="error" sx={{ width: '100%' }}>
          {errorMsg}
        </Alert>
      </Snackbar>
      </CardContent>
    </Card>
  );
}