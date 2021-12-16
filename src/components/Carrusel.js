import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from 'react';

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
            width="100%">
            {libros && libros.map((book, index) => {
                return (
                    <div style={{paddingBottom: '50px' }} key={index}>
                        <img style={{ width: '300px', height: '500px' }} src={book.image_url} alt="" />
                    </div>
                )
            }
            )}
            )

        </Carousel>

    )


}

