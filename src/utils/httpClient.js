//REALIZA UN FETCH A LA API, RECIBE EL PATH AL QUE DESEA ACCEDER Y
//EL TIPO DE SOLICITUD QUE DESEA IMPLEMENTAR

const API = "https://libreriapi.herokuapp.com/v1"; //Raíz de la API a consumir
//const localApi = "http://localhost:4011/v1"; //Api local temporal para pruebas

//función asíncrona
export async function requestApi(path, req, arrBody) {
  const body = (req === "POST") ? arrBody : {};

  if(req === "GET"){
  //path y tipo de solicitud
    const resultado = await fetch(API + path, {
      //Se concatena api y path
      mode: "cors",
      method: req, //tipo de petición
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      }),
    }); //Si todo OK se retorna el JSON con los resultados, si no el error
    return resultado.ok ? await resultado.json() : await {"error": resultado.status, "errorMsg": resultado.statusText};
  }
  else if(req === "POST")
  {
    const resultado = await fetch(API + path, {
      //Se concatena api y path
      mode: "cors",
      method: req, //tipo de petición
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      }),
    }); //Si todo OK se retorna el JSON con los resultados, si no el error
    return resultado.ok ? await resultado.json() : await {"error": resultado.status, "errorMsg": resultado.statusText};
  }
} 
