import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
//import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
//import RestoreIcon from "@mui/icons-material/Restore";
//import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from '@mui/icons-material/Comment';
//import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

export function CommentsCard({ libroId, arrayComments }) {
  const comentarios = arrayComments.filter(
    (comment) => comment.libro_id === libroId
  );
  console.log(comentarios.lenght)
  let totalComments = comentarios.length === 0 ? 'Comentarios (0)' : `Comentarios (${comentarios.length})`;
  console.log(totalComments)

  const [value, setValue] = useState(0);
  const [messages, setMessages] = useState();

  useEffect(() => {
    setMessages();
  }, [value, setMessages]);

  return (
    <>
      <Box sx={{ width: "auto", height: "120px", overflowY: "scroll" }}>
        <List>
          {comentarios.map(({ _id, nombre, email, texto, fecha }) => (
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
        <Paper>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} /> */}
            <BottomNavigationAction
              label={totalComments}
              icon={<CommentIcon />}
            />
            {/* <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} /> */}
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}
