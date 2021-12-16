import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from 'react';
import { coverBookIntoLarge } from "../utils/coverBookIntoLarge";

export function Carrusel() {


    const [libros, setBooks] = useState('');


    useEffect(() => {
        getData();
        async function getData() {
            const response = await fetch("https://libreriapi.herokuapp.com/v1/libros");
            const data = await response.json();

            setBooks(data);
        }
    }, []);
    return (

        <Carousel autoPlay="true"
            emulateTouch={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            transitionTime={800}
            width="auto"
        >
            {libros && libros.map((book, index) => {
                const linkCoverBookLarge = coverBookIntoLarge(book.image_url, "/");
                return (
                    <div style={{paddingBottom: '50px' }} key={index}>
                        <img style={{ width: '300px', height: '380px' }} src={linkCoverBookLarge} alt={book.title} />
                    </div>
                )
            }
            )}
            )

        </Carousel>

    )


}

