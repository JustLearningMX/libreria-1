import styles from '../css/Main.module.css';
import { Stack, Box, Typography, Card, CardMedia } from '@mui/material';
import { AccountCircle } from "@mui/icons-material";
import books from '../imgs/books.jpg';
import ebook from '../imgs/reader-ebook.jpg';

import { Carrusel } from "./Carrusel";

export function Main() {  

  return (
    <main className={styles.main}>
      <Stack spacing={2} sx={{ width: "320px", height: "480px"}}>
        <Carrusel/>
      </Stack>

      <Stack spacing={2} sx={{ width: "60%"}}>
        <Box>         
          
          <Typography 
            className={styles.typography1}
            variant='h5'
            paragraph="true"
            sx={{ display: "flex"}}
          > 
            ¿Qué es flipbook? 
          </Typography>
          <Typography 
            className={styles.typography2}
            variant='body1'
            paragraph="true"
          > 
            ¿Recuerdas esos clubes de lectura en dónde los amantes de libros nos reuníamos a comentar uno en específico 
            e intercambiar opiniones sobre la historia y sus personajes? Pues flipbook es una plataforma que busca mejorar
            esa experiencia a través de ofrecer una aplicación web que te permita interactuar con otros lectores discutiendo, 
            debatiendo, argumentando e imaginando acerca de tus libros favoritos, pero manteniendo un historial de tus libros 
            favoritos y sus respectivos comentarios.
          </Typography>
          <Typography 
            className={styles.typography2}
            variant='body1'
            paragraph="true"
          > 
            En flipbook brindamos un espacio a tu creatividad, para que desarrolles ese crítico que llevas en tu interior y
            permitas que otros lectores -de muchas partes del mundo- puedan conocer tu opinión, recibir retroalimentación e 
            intercambiar impresiones.
          </Typography>

          <Typography 
            className={styles.typography1}
            variant='h5'
            paragraph="true"
            sx={{ display: "flex"}}
          > 
            ¿Cómo funciona? 
          </Typography>
          <Typography 
            className={styles.typography2}
            variant='body1'
            paragraph="true"
          > 
            Es muy sencillo, en el menú principal elige la opción Libros para ver todo el catálogo, navega y elige tu libro preferido 
            -o si te es más conveniente puedes usar el Buscador-, una vez que ingreses a tu libro elegido podrás ver los comentarios
            de otros lectores, tómate tu tiempo en leerlos o si gustas emíte el tuyo enseguida.
          </Typography>

          <Typography 
            className={styles.typography1}
            variant='h5'
            paragraph="true"
            sx={{ display: "flex"}}
          > 
            ¿Cómo inicio? 
          </Typography>
          <Typography 
            className={styles.typography2}
            variant='body1'
            paragraph="true"
          > 
            Lo recomendable es que te des de alta en la plataforma o de lo contrario sólo podrás visualizar los libros y sus 
            comentarios. Para ello, en el menú principal elige en el ícono <AccountCircle sx={{ fontSize: "15px" }} /> la opción 
            Registrarse, ingresa tus datos, y una vez logueado podrás iniciar a comentar tus libros favoritos.
          </Typography>
        </Box>
        
        <Box>
          <Card sx={{ width: "auto"}}>
            <CardMedia
              component="img"
              height="194"
              src={books}
              alt="books-image"
            />
          </Card>
        </Box>
      </Stack>
    </main>
  );
}
