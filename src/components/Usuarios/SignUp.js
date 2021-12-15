import { useState, useEffect } from 'react';//Uso de estados
import styles from '../../css/SignUp.css';//Estilos CSS
import { requestApi } from '../../utils/httpClient';//Conexión a la BD
import { Redirect } from "react-router-dom"; //Para las rutas de las páginas
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export function SignUp({ handleClose }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const useStyles = styled(theme => ({
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

    const handleSubmit = e => {
        e.preventDefault();
        console.log(firstName, lastName, email, password, username);
        handleClose();
      };
      const classes = useStyles();
      return (
        <form className={classes.root} onSubmit={handleSubmit}>
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
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <TextField
            label="Apellido"
            variant="filled"
            required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
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
            <Button variant="contained" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Registrarse
            </Button>
          </div>
        </form>
      );
    
}
