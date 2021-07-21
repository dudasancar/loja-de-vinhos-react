import React from 'react';
import api from './services/api';
import styles from './BestClients.module.css';

const BestClients = () => {
    const [clients, setClients] = React.useState();

    React.useEffect(() => {
     api.get("/bestClients")
        .then((response) => setClients(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err)
        })
    }, []);
   
    return (
        <div className={styles.all}>
         <h1 className={styles.title}>Best Clients</h1>
         <ul className={styles.list}>
            {clients?.map(({nome}) => <li>{nome}</li>)}
         </ul>
        </div>
    )
}

export default BestClients;
