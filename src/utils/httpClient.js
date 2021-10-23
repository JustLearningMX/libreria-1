//REALIZA UN FETCH A LA API, RECIBE EL PATH AL QUE DESEA ACCEDER Y 
//EL TIPO DE SOLICITUD QUE DESEA IMPLEMENTAR

const API = "https://libreriapi.herokuapp.com/v1"; //Raíz de la API a consumir
const localApi = "http://localhost:4011/v1"; //Api local temporal para pruebas

//función asíncrona
export async function reqApi(path, req) { //path y tipo de solicitud
  const resultado = await fetch(localApi + path, { //Se concatena api y path
    mode: "cors",
    method: req, //tipo de petición
    headers: new Headers({
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": '*',
    }),
  }); //Se retorna el JSON con los resultados
  return await resultado.json();
}
