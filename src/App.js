import React from 'react'
import Header from './Header';
import './App.css';
import Home from './Home';
import ClientsOrderedbyPurchase from './ClientsOrderedbyPurchase';
import BestClientOf2016 from './BestClientOf2016';
import BestClients from './BestClients';
import RecommendWine from './RecommendWine';
import { Route } from 'react-router-dom';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Header />
                <Route path="/" exact component={Home} />
                <Route path="/clientsOrderedByPurchase" component={ClientsOrderedbyPurchase}/>
                <Route path="/bestClient" component={BestClientOf2016}/>
                <Route path="/bestClients" component={BestClients}/>
                <Route path="/recommendWine" component={RecommendWine}/>
            <Footer />           
        </div>
    )
}

export default App;
