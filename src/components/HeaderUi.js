//Material UI
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { Link } from "react-router-dom"; //Para enlazar el menú con sus respectivas páginas
import {
  Avatar,
  Container,
  Menu,
  MenuItem,
  Popover,
  Tooltip,
} from "@mui/material";

import styles from "../css/Header.module.css"; //Estilos para el header
import { useState } from "react";

export function HeaderUi() {
  const [anchorElMenuUser, setAnchorElMenuUser] = useState(null);
  const [anchorElMainMenu, setAnchorElMainMenu] = useState(null);

  const handleMenuUser = (event) => {
    setAnchorElMenuUser(event.currentTarget);
  };

  const handleCloseMenuUser = () => {
    setAnchorElMenuUser(null);
  };

  const handleMainMenu = (event) => {
    setAnchorElMainMenu(event.currentTarget);
  };

  const handleCloseMainMenu = () => {
    setAnchorElMainMenu(null);
  };

  const opcionesMenu = [
    {
      id: 1,
      title: "Libros",
      link: "/libros",
    },
    {
      id: 2,
      title: "Comentarios",
      link: "/comentarios",
    },
    {
      id: 3,
      title: "Autores",
      link: "/autores",
    },
  ];

  const menuResponsivoOpciones = (
    <Popover
      open={Boolean(anchorElMainMenu)}
      anchorEl={anchorElMainMenu}
      onClose={handleCloseMainMenu}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      {opcionesMenu.map((opcion) => (
        <Typography key={opcion.id} sx={{ p: 2 }} onClick={handleCloseMainMenu}>
          <Link to={opcion.link}>{opcion.title}</Link>
        </Typography>
      ))}
    </Popover>
  );

  const menuResponsivo = (
    <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 2 }}
        onClick={handleMainMenu}
      >
        <MenuIcon />
      </IconButton>
      {menuResponsivoOpciones}
    </Box>
  );

  //Dibuja un ícono en el menú principal para Ingresar o Darse de Alta
  const usuariosMenu = (
    <>
      <Tooltip title="Account settings">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-usuario"
          aria-haspopup="true"
          onClick={handleMenuUser}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-usuario"
        anchorEl={anchorElMenuUser}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElMenuUser)}
        onClose={handleCloseMenuUser}
      >
        <MenuItem onClick={handleCloseMenuUser}>
          <Link to="/usuarios">
            <Box sx={{ display: "flex" }}>
              <Avatar sx={{ width: 24, height: 24, mr: 1 }} variant="rounded">
                R
              </Avatar>
              Registrarse
            </Box>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenuUser}>
          <Link to="/usuarios">
            <Box sx={{ display: "flex" }}>
              <Avatar sx={{ width: 24, height: 24, mr: 1 }} variant="rounded">
                I
              </Avatar>
              Ingresar
            </Box>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );

  return (
    <AppBar className={`${styles.header}`} sx={{ height: "80px", lineHeight: "80px" }}>
      <Container maxWidth="md" >
        <Toolbar disableGutters>
          <Link to="/">
            <div className={styles.empresaContainer}>
              <Container sx={{ display: { xs: 'none', sm: "flex"} }} className={styles.logoHeader}>
                <img
                  className={styles.logo}
                  src="https://i.pinimg.com/originals/b9/12/80/b91280364e12594bea63ae99ccc2767e.png"
                  alt="Logo-LibreríaBedu"
                />
              </Container>
              <Box className={styles.titulo}>Librería Bedu</Box>
            </div>
          </Link>
          <Container sx={{ display: { xs: "none", md: "flex" } }}>
            <ul className={styles.menu}>
              {opcionesMenu.map((opcion) => (
                <Link to={opcion.link}>
                  <li key={opcion.id} className={styles.menuItems}>
                    {opcion.title}
                  </li>
                </Link>
              ))}
            </ul>
          </Container>
          {menuResponsivo /**Menú para pantallas medianas y chicas*/}
          {usuariosMenu /**Traemos el botón de Usuarios y su menú de opciones*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
