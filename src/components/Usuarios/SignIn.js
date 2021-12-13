//Componente que dibuja un formulario para
//ingresar a la plataforma mediante email y pass

import { useState, useEffect } from 'react';//Uso de estados
import styles from '../../css/SignIn.module.css';//Estilos CSS
import { requestApi } from '../../utils/httpClient';//Conexión a la BD
import { Alert, Box, Snackbar  } from '@mui/material';//Mensajes con MUI
import CircularProgress from '@mui/material/CircularProgress';

export function SignIn({ title ="Iniciar sesión", subTitle ="Comenta tus libros favoritos"  }) {

    const [userEmail, setUserEmail] = useState("");//Guarda el email
    const [userPassword, setUserPassword] = useState("");//Guarda el password
    const [getUserFromDb, setGetUserFromDb] = useState(false);//Ir a obtener el JWT del usuario
    const [disabledButton, setDisabledButton] = useState(false);//Guarda el password

    //Estados para mensajes en pantalla
    const [snackbar, setSnackBar] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [alertSeverity, setalertSeverity] = useState("error");
    const [progress, setProgress] = useState({"display": "none"});

    const closeSnackbar = (event, reason) => {
        // setProgress({"display": "none"});

        if (reason === 'clickaway') {
          return;
        };

        setSnackBar(false);
        
        if(alertSeverity === "success")  {
            window.location.reload(false);
            // setRedirect(true);
        };
      };

    //Guardamos el email y password
    const handleChangeInput = (e) => {
        const inputValue = e.target.value;
        e.target.name === "email" ? setUserEmail(inputValue) : setUserPassword(inputValue);
    };

    //Al dar click en "Iniciar sesión"
    //Activa el UseEffect
    const handleOnCLick = (e) =>{
        setProgress({"display": "flex", "justifyContent": "center"});
        setDisabledButton(true);//Se deshabilita el botón

        e.preventDefault();
        setGetUserFromDb(!getUserFromDb);//Bandera en TRUE para ir por el usuario
    };

    //Al dar click en "Iniciar Sesión"
    useEffect(()=>{

        if(getUserFromDb) {//Si está en TRUE

            //Creamos el cuerpo en base al EMAIL y PASS del usuario
            const body = {"email": userEmail, "password": userPassword};
            
            const path = `/usuarios/entrar`; //path para obtener JWT de la API
            requestApi(path, "POST", body).then((data) => {
                //Se recibe el JSON con los datos de la petición

                if(data.error) { //Si hubo un error
                    console.log(data.error);
                    setalertSeverity("error");
                    setErrorMsg("Error en el email o contraseña");

                    setDisabledButton(false);//Se habilita el botón
                } else { //Si todo salió bien                    
                    console.log(data);
                    //Guardamos al USUARIO y su TOKEN en el localStorage
                    window.localStorage.setItem(
                        "loggedBooksAppUser", JSON.stringify(data.user)
                    );
                    setalertSeverity("success");
                    setErrorMsg(`Bienvenido ${data.user.username}`);
                }
                setSnackBar(true);                
                setProgress({"display": "none"});
            
            });

            setGetUserFromDb(!getUserFromDb);//Ponemos el FALSE el generar el JWT            
        }
        
    }, [getUserFromDb]);

    // const loggedUserJson = window.localStorage.getItem('loggedBooksAppUser');
     //redirect ? <Redirect to="/" /> :
     return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={handleOnCLick}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subTitle}>{subTitle}</p>

                <label className={styles.label}>Email:</label>
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Ingrese su email" 
                    className={styles.input} 
                    required
                    onChange={handleChangeInput} />
                
                <label className={styles.label}>Contraseña:</label>
                <input 
                    name="password" 
                    type="password" 
                    className={styles.input} 
                    required
                    onChange={handleChangeInput} />

                <input type="submit" value="Iniciar sesión" className={styles.button} disabled={disabledButton}></input>
                                
                <Box sx={ progress}>
                    <CircularProgress size={30} sx={{ marginTop: "12px"}} />
                </Box>
            </form>
            <Box>
                <Snackbar open={snackbar} autoHideDuration={3000} onClose={closeSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
                    <Alert onClose={closeSnackbar} severity={alertSeverity} sx={{ width: '100%' }}>
                    {errorMsg}
                    </Alert>                
                </Snackbar>
            </Box>            
        </section>
    );
}    