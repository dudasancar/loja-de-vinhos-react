import React from 'react';
import api from './services/api';
import styles from './RecommendedWine.module.css';


const RecommendedWine = () => {
    const [clients, setClients] = React.useState();

    React.useEffect(() => {
        api.get("/clients")
           .then((response) => setClients(response.data))
           .catch((err) => {
               console.error("ops! ocorreu um erro" + err)
           })
       }, []);

    return (
        <div className={styles.all}>
            <h1 className={styles.title}>Recommended Wine</h1>
            <select className={styles.options}>{clients?.map(({nome}) => nome)}</select>
        </div>
    )
}

export default RecommendedWine;
