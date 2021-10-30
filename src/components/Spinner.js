// COMPONENTE QUE MUESTRA UNB SPINNER MIENTRAS CARGA DATOS DE LA API

import { FaSpinner} from 'react-icons/fa';
import styles from '../css/Spinner.module.css';

export function Spinner({mensaje}) {
    return(
        <div className={styles.spinner}>
            {/**Componente de la dependencia REACT-ICONS */}
            <p>{mensaje}</p>
            <FaSpinner className={styles.spinning} size={60}/>
        </div>
    );
}