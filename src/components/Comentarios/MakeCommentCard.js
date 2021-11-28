import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { TextField, FormControl, Alert, Snackbar  } from '@mui/material';
import { useState, useEffect } from "react";

export default function MakeCommentCard({ linkCoverBookLarge, setBotonGuardar }) {

  const [emailArroba, setEmailArroba] = useState(false);
  const [snackbar, setSnackBar] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [nombre, setNombre] = useState(false);
  const [comentarios, setComentarios] = useState(false);
  // let arroba = false;

  const verificarTexto = (e, campo) => {
    const nombreValue = e.target.value;
    
    if(nombreValue.length <= 0){
      setErrorMsg(`¡El ${campo} no puede ir vacío!`);
      setSnackBar(true);
    } else {

      campo === "Nombre" ? setNombre(true) : setComentarios(true);

    };    

    if (emailArroba && nombre && comentarios){
      setBotonGuardar(false);
    }
  };

  const verificarEmailOnChange = (e) => {
    
    const emailValue = e.target.value;
    emailValue.includes('@') ? setEmailArroba(true) : setEmailArroba(false);
  };

  const verificarEmailOnBlur = (e) => {

    const emailValue = e.target.value;
    emailValue.includes('@') ? setEmailArroba(true) : setEmailArroba(false);

    if(!emailArroba){
      setErrorMsg("¡Ingrese un EMAIL válido!");
      setSnackBar(true);
    }

    if (emailArroba && nombre && comentarios){
      setBotonGuardar(false);
    }
  };

  const closeSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBar(false);
  };

  useEffect(()=>{

  },[]);

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
            onChange={verificarEmailOnChange}
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
            onBlur={(e)=>verificarTexto(e, 'Comentario')}
          />
        </FormControl>
        <Snackbar open={snackbar} autoHideDuration={6000} onClose={closeSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center', }}>
        <Alert onClose={closeSnackbar} severity="error" sx={{ width: '100%' }}>
          {errorMsg}
        </Alert>
      </Snackbar>
      </CardContent>
    </Card>
  );
}