import React from 'react';
import styles from './Home.module.css';
import { Link, Route } from 'react-router-dom';


const Home = () => {
    return (
        <div className={styles.div}>
        <ul className={styles.list}>
            <li><Link to="/clientsOrderedByPurchase" className={styles.link}>Clients Ordered by Purchase</Link></li>
            <li><Link to="/bestClient" className={styles.link}>Best Client of 2016</Link></li>
            <li><Link to="/bestClients" className={styles.link}>Best Clients</Link></li>
            <li><Link to="/recommendedWine/:client" className={styles.link}>Recommended Wine</Link></li>
        </ul>
        </div>
    )
}

export default Home;
