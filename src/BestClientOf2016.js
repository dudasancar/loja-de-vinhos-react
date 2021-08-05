import React from 'react';
import api from './services/api';
import styles from './BestClientOf2016.module.css';

const BestClientOf2016 = () => {
    const [cliente, setCliente] = React.useState();

    React.useEffect(() => {
     api.get("/bestClient")
        .then((response) => setCliente(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err)
        })
    }, []);

    function goBack() {
        window.history.back()
      }

    return (
        <div className={styles.all}>
            <input type="button" value="←" onClick={goBack} className={styles.button}/>
            <h1 className={styles.title}>Best Client of 2016: <span className={styles.name}>{cliente?.nome}</span></h1>
            <p className={styles.biggest}>Biggest Purchase</p>
            <p className={styles.total}>Total: {cliente?.valorTotal}</p>
        </div>
    )
}

export default BestClientOf2016;
