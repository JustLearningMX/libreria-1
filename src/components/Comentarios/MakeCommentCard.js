import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { TextField, FormControl, Alert, Snackbar  } from '@mui/material';
import { useState } from "react";

export default function MakeCommentCard({ linkCoverBookLarge, setBotonGuardarDisabled, usersComments, setUsersComments }) {

  const [snackbar, setSnackBar] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  // console.log(usersComments)
  //Gran libro de aventuras, me encantó y pienso leerme la trilogía del Señor de los anillos. Recomendado!

  const verificarTexto = (e, campo) => {
    const textValue = e.target.value;      
    
    if(textValue.length <= 0){
      setBotonGuardarDisabled(true);//Desactivamos el botón guardar
      setErrorMsg(`¡El ${campo} no puede ir vacío!`);
      setSnackBar(true);
    }
  };

  const guardarTexto = (e, campo) => {
    const textValue = e.target.value;

    if(campo === "Nombre") 
    { 
      setUsersComments({
        ...usersComments,
        "nombre": textValue,
      });
    } 
    else 
    {  
      setUsersComments({
        ...usersComments,
        "texto": textValue,
      });
    };

    if (usersComments.nombre && usersComments.texto && usersComments.email){    
      setBotonGuardarDisabled(false);//Activamos el botón guardar
    }
  };

  const verificarEmailOnBlur = (e) => {
    const emailValue = e.target.value;
    if(emailValue.includes('@') && emailValue.includes('.')) 
    {
      setUsersComments({
        ...usersComments,
        "email": emailValue,
      });
    } 
    else
    {
      setBotonGuardarDisabled(true);//Desactivamos el botón guardar
      setErrorMsg("¡Ingrese un EMAIL válido!");
      setSnackBar(true);
    }
    if (usersComments.nombre && usersComments.texto && usersComments.email){    
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
            id="tfNombre" 
            fullWidth 
            label="Nombre" 
            variant="outlined" 
            size="small" 
            sx={{marginBottom: "10px"}} 
            required={true}
            onChange={(e)=>guardarTexto(e, 'Nombre')}
            onBlur={(e)=>verificarTexto(e, 'Nombre')}
          />
          <TextField 
            id="tfEmail" 
            fullWidth 
            label="Email" 
            variant="outlined" 
            size="small" 
            sx={{marginBottom: "10px"}} 
            required={true}
            type={'email'}
            placeholder="example@example.com"
            onBlur={verificarEmailOnBlur}
          />
          <TextField
            size="small" 
            id="outlined-textarea"
            label="Comentarios"
            placeholder="Que te ha parecido el libro"
            multiline
            rows={3}
            variant="outlined"
            required={true}
            onChange={(e)=>guardarTexto(e, 'Comentario')}
            onBlur={(e)=>verificarTexto(e, 'Comentario')}
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