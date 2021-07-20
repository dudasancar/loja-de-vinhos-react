import React from 'react';
import styles from './Home.module.css';
import { Link, Route } from 'react-router-dom';
import ClientsOrderedByPurchase from './ClientsOrderedbyPurchase';
import BestClientOf2016 from './BestClientOf2016';
import BestClients from './BestClients';
import RecommendedWine from './RecommendedWine';

const Home = () => {
    return (
        <div className={styles.div}>
        <ul className={styles.list}>
            <li><Link to="/clientsOrderedByPurchase">clients ordered by purchase</Link></li>
            <li><Link to="/bestClient">best client of 2016</Link></li>
            <li><Link to="/bestClients">best clients</Link></li>
            <li><Link to="/recommendedWine/:client">recommended wine</Link></li>
        </ul>

        <Route path="/clientsOrderedByPurchase" component={ClientsOrderedByPurchase}/>
        <Route path="/bestClient" component={BestClientOf2016}/>
        <Route path="/bestClients" component={BestClients}/>
        <Route path="/recommendedWine/:client" component={RecommendedWine}/>
        </div>
    )
}

export default Home;
