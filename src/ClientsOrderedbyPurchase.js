import React from 'react';
import api from './services/api';
import styles from './ClientsOrderedbyPurchase.module.css';


const ClientsOrderedbyPurchase = () => {
    const [order, setOrder] = React.useState();

    React.useEffect(() => {
     api.get("/clientsOrderedByPurchase")
        .then((response) => setOrder(response.data))
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
            <h1 className={styles.title}>Clients Ordered by Purchase</h1>
            <div className={styles.divlist}>
            <ul className={styles.list}>
                {order?.map(({nome}) => <li>{nome}</li>)}
            </ul>
            <ul className={styles.list}>
                {order?.map(({valorTotal}) => <li>$ {valorTotal.toLocaleString('pr-br', {minimumFractionDigits: 2})}</li>)}
            </ul>
            </div>
        </div>
    )
}

export default ClientsOrderedbyPurchase;
