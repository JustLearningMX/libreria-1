//Hook personalizado usando el hook de React UseLocation
//para recuperar parámetros de la URL
import { useLocation } from "react-router";

export function useQuery(){
    return new URLSearchParams(useLocation().search);
  }