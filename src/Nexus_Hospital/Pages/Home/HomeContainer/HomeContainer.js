import React from 'react';
import CabinCategories from '../CabinCategories/CabinCategories';
import Header from '../Header/Header';
import Services from '../Services/Services';
import "./HomeContainer.css";

const HomeContainer = () => {
    return (
        <div>
          <Header/> 
          <div className="content-area pt-4">
            <Services/>
          <CabinCategories/>     
          </div>

        </div>
    );
};

export default HomeContainer;