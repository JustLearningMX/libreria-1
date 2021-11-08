// COMPONENTE QUE DIBUJA UNA TARJETA QUE MUESTRA UNA IMAGEN DE UN LIBRO Y SU TÍTULO

import { Link } from "react-router-dom";
import { coverBookIntoLarge } from "../../utils/coverBookIntoLarge";
import PropTypes from 'prop-types'; //Validación de propiedades
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export function LibroCard({ libro }) {
	//Obtenemos un link nuevo con una imagen de mejor calidad
	const linkCoverBookLarge = coverBookIntoLarge(libro.image_url, "/");
	const authorsOfBook = libro.Autores ? libro.Autores.map((autor) => autor.nombre_completo).join(", ") : "";


	return (
		<Link to={"/libros/id/" + libro._id}>
			<Card sx={{ maxWidth: 300 }}>
				<CardMedia
					component="img"
					height="435"
					image={linkCoverBookLarge}
					alt={libro.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{libro.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{authorsOfBook}

					</Typography>
				</CardContent>
			</Card>
		</Link>
	);
}

LibroCard.propTypes = {
	libro: PropTypes.object.isRequired
}