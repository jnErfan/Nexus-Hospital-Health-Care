import React from 'react';
import CabinCategories from '../CabinCategories/CabinCategories';
import Header from '../Header/Header';
import "./Home.css";

const Home = () => {
    return (
        <div>
          <Header/> 
          <div className="content-area pt-4">
          <CabinCategories/>     
          </div>

        </div>
    );
};

export default Home;<Header/>