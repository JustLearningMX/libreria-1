//COMPONENTE QUE DIBUJA UN TARJETA DE COMENTARIOS
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CommentIcon from '@mui/icons-material/Comment';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Button, Typography } from "@mui/material";
import { requestApi } from "../../utils/httpClient";
import Modal from "./Modal";

export function CommentsCard({ libroId, libroTitle, linkCoverBookLarge }) {  
  
  //Se obtienen los comentarios del libro
  const [comments, setComments] = useState([]); 
  const [value, setValue] = useState(1);

  //Ventana Modal para agregar comentarios
  const [openModal, setOpenModal] = useState(false);
  //Cambiar color al botón "Agregar comentarios"
  const [colorIconModal, setcolorIconModal] = useState("disabled");

  //Abre la ventana modal
  const handleClickOpenModal = () => {
    setcolorIconModal("primary");
    setOpenModal(true);
  };

  //Cierra la ventana modal
  const handleClickCloseModal = () => {
    setcolorIconModal("disabled");
    setOpenModal(false);
  };

  useEffect(() => {
    const path = `/comentarios/`; //path para traer todos los comentarios de la API
    requestApi(path, "GET").then((data) => {
      //Se recibe el JSON con los datos de la petición
      const comentarios = data.filter(
        (comment) => comment.libro_id === libroId
      );
      setComments(comentarios); //Se modifica el estado de "comments" con los datos del JSON
    });
  }, [libroId, setComments]);

  //Guarda el total de comentarios en el libro
  let totalComments = 0;
  totalComments = comments.length === 0 ? 'Comentarios (0)' : `Comentarios (${comments.length})`;

  return (
    <>
      <Box sx={{ width: "auto", height: "auto", textAlign: "center" }}>
        <Paper>
          <CommentIcon  color="primary"/>
          <Typography variant="subtitle2" color="primary">
            {totalComments}
          </Typography>
        </Paper>        
      </Box>
      <Box sx={{ width: "auto", height: "120px", overflowY: "scroll" }}>
        <List>
          {comments.map(({ _id, nombre, email, texto, fecha }) => (
            <ListItem button key={_id}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={nombre} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" style={{ color: "#ff6f00" }}>
                    {nombre}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="subtitle2"
                    style={{ color: "gray", fontStyle: "italic" }}
                  >
                    {texto}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ width: "auto" }}>
        <Paper sx={{ }}>
          <Button onClick={handleClickOpenModal} sx={{ display: "flex", flexDirection: "column", padding: "5px 0", width: "100%"}}>
            <AddCommentIcon  color={colorIconModal}/>
          </Button>
        </Paper>
        
        <Modal 
          openModal={openModal}
          handleClickCloseModal={handleClickCloseModal}
          libroTitle={libroTitle} 
          linkCoverBookLarge={linkCoverBookLarge}
        / >
      </Box>
    </>
  );
}
