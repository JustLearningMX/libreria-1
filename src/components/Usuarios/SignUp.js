import { useState, useEffect } from 'react';//Uso de estados
import styles from '../../css/SignUp.css';//Estilos CSS
import { Redirect } from "react-router-dom"; //Para las rutas de las páginas
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';


export function SignUp() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
      
          '& .MuiTextField-root': {
            margin: '5px',
            width: '300px',
          },
          '& .MuiButtonBase-root': {
            margin: '5px',
          },
        },
      }));

    
     async function signUp(){
         let item={nombre, apellido, email, password, username}
         console.warn(item);
         let result= await fetch('https://libreriapi.herokuapp.com/v1/usuarios',{
             method: 'POST',
             body:JSON.stringify(item),
             headers: new Headers({
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*",
            })
         })
         result = await result.json()
         localStorage.setItem(
            "user-info", JSON.stringify(result)
        );
     } 
    
      const classes = useStyles();
      return (
        <form className={classes.root} onSubmit={signUp}>
            <TextField
            label="Usuario"
            variant="filled"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
          <TextField
            label="Nombre"
            variant="filled"
            required
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
          <TextField
            label="Apellido"
            variant="filled"
            required
            value={apellido}
            onChange={e => setApellido(e.target.value)}
          />
          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          
          <div>
            <Button variant="contained">
              Cancelar
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Registrarse
            </Button>
          </div>
        </form>
      );
    
}
