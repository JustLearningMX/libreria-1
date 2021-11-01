// COMPONENTE QUE MUESTRA UN SPINNER MIENTRAS CARGA DATOS DE LA API

import { FaSpinner} from 'react-icons/fa';
import styles from '../css/Spinner.module.css';

export function Spinner({mensaje}) {//Recibe un mensaje
    return(
        <div className={styles.spinner}>
            <p>{mensaje}</p>
            {/**Componente de la dependencia REACT-ICONS */}
            <FaSpinner className={styles.spinning} size={60}/>
        </div>
    );
}