/**FUNCIÓN QUE PERMITE TRANSFORMAR EL LINK DE LA CUBIERTA DEL LIBRO DE MEDIUM A LARGE
 * Recibe: https://images.gr-assets.com/books/1344922523m/1953.jpg
 *                                                      ^
 * Cambia: https://images.gr-assets.com/books/1344922523l/1953.jpg
 *                                                      ^
*/

export function coverBookIntoLarge(linkADividir,separador) {
   let arrayDeCadenas = linkADividir.split(separador);
   let nuevoLink ="";

   for (var i=0; i < arrayDeCadenas.length; i++) {
      
      i === 4 ? nuevoLink += arrayDeCadenas[i].replace('m','l') + "/" : 
      i === 5 ? nuevoLink += arrayDeCadenas[i] : nuevoLink += arrayDeCadenas[i] + "/";

   }
    
   return nuevoLink;
 }