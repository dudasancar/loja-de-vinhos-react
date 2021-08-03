import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className={styles.div}>
        <ul className={styles.list}>
            <div className={styles.row}>
            <li className={styles.card1}><Link to="/clientsOrderedByPurchase" className={styles.link}>Clients Ordered by Purchase</Link></li>
            <li className={styles.card2}><Link to="/bestClient" className={styles.link}>Best Client of 2016 (biggest purchase)</Link></li>
            </div>
            <div className={styles.row}>
            <li className={styles.card3}><Link to="/bestClients" className={styles.link}>Best Clients (loyal clients)</Link></li>
            <li className={styles.card4}><Link to="/recommendWine" className={styles.link}>Recommend Wine</Link></li>
            </div>
        </ul>
        </div>
    )
}

export default Home;
