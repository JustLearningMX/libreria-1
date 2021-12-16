import styles from "../css/Footer.module.css";
import { GitHub, Link } from '@mui/icons-material';
import Links from '@mui/material/Link';
import { Typography, Box, Grid, Stack } from '@mui/material';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.projectContainer}>
        <h1 className={styles.h1_}>En este proyecto se consume la API Libreriapi.</h1>
        <p className={styles.p_}>Esta API permite gestionar el CRUD completo de libros y permite a un usuario darse de alta para comentarlos.</p>
        <p className={styles.p_}>Fue creado mediante el entorno de desarrollo NodeJS, el framework Express y MongoDB como base de datos.</p>
        
        <Box sx={{ display: "flex"}}>
          <Links 
            className={styles.a_} 
            href="https://github.com/BeduTeam3/Proyecto-Fase-2" 
            target="_blank" 
            underline="hover"
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <GitHub />
              <Typography variant="h6">Repositorio</Typography>
            </Stack>
          </Links>

          <Links 
            className={styles.a_} 
            href="https://libreriapi.herokuapp.com/v1/api-docs/" 
            target="_blank" 
            underline="hover"
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <Link />
              <Typography variant="h6">Documentación</Typography>
            </Stack>
          </Links>
          </Box>

        <h1 className={styles.h1_} style={{ marginTop: "30px" }}>Las vistas de esta aplicación web fueron creadas mediantes ReactJS.</h1>
        <p className={styles.p_}>ReactJS es una librería que permite diseñar componentes reutilizables.</p>
        
        <Box sx={{ display: "flex"}}>
          <Links 
            className={styles.a_} 
            href="https://github.com/BeduTeam3/libreria" 
            target="_blank" 
            underline="hover"
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <GitHub />
              <Typography variant="h6">Repositorio</Typography>
            </Stack>
          </Links>
          </Box>
      </div>

      <div className={styles.disclaimer}>
        <p>**Este es un proyecto elaborado como trabajo final del curso Desarrollo Web Full Stack de BEDU.</p>
        <p>© Creado por: Justine Delgado e Hiram Chávez. 2021.</p>
      </div>
    </footer>
  );
}
