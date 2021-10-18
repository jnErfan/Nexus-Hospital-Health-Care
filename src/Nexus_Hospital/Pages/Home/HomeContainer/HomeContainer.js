import React from 'react';
import CabinCategories from '../CabinCategories/CabinCategories';
import Header from '../Header/Header';
import QualityStuff from '../QualityStuff/QualityStuff';
import Services from '../Services/Services';
import "./HomeContainer.css";

const HomeContainer = () => {
    return (
        <div>
          <Header/> 
          <div className="content-area pt-4">
            <Services/>
          <CabinCategories/>   
          <QualityStuff/>  
          </div>

        </div>
    );
};

export default HomeContainer;