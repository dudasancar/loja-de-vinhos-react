import React from 'react';
import api from './services/api';
import styles from './BestClients.module.css';
import { Button } from 'antd';

const BestClients = () => {
    const [clients, setClients] = React.useState();

    React.useEffect(() => {
     api.get("/bestClients")
        .then((response) => setClients(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err)
        })
    }, []);

    function goBack() {
        window.history.back()
      }
   
    return (
        <div className={styles.all}>
         <Button type="primary" onClick={goBack} className={styles.button}>←</Button>
         <h1 className={styles.title}>Best Clients</h1>
         <ul className={styles.list}>
            {clients?.map(({nome}) => <li>{nome}</li>)}
         </ul>
        </div>
    )
}

export default BestClients;
