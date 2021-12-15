import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import styles from '../../css/SignIn.module.css';//Estilos CSS
import { Redirect } from "react-router-dom"; //Para las rutas de las páginas

export function LogOut() {

    const [openModal, setOpenModal] = useState(true);
    const [redirect, setRedirect] = useState(false);

    //Si el usuario está lougeado y guardado en local storage
    const loggedUserJson = window.localStorage.getItem('loggedBooksAppUser');
    const user = loggedUserJson ? JSON.parse(loggedUserJson) : null;//Se guardan en un JSON

    const handleClickCloseModal = () =>{
        setRedirect(true);
        setOpenModal(false);        
    };

    const handleClickCancelarBtn = () =>{
        setRedirect(true);
        setOpenModal(false);
    };

    const handleClickCerrarBtn = () =>{
        window.localStorage.removeItem('loggedBooksAppUser');
        window.location.reload(false);
        setRedirect(true);
        setOpenModal(false);
    };
    
    return redirect ? <Redirect to='/' /> :
    (
        <section className={styles.container}>
            <p className={styles.title}>Cerrar sesión</p>
            <Dialog
                sx={{ height: '100vh'}}
                open={openModal}
                onClose={handleClickCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ paddingBottom: 0}}>
                    {`Hola ${user.username}, ¿Deseas cerrar la sesión?`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{ paddingBottom: "5px"}}>
                        ¡Vuelve pronto!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickCancelarBtn}>Cancelar</Button>
                    <Button onClick={handleClickCerrarBtn} autoFocus>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
}