import React from 'react';
import CabinCategories from '../CabinCategories/CabinCategories';
import Header from '../Header/Header';
import PartneringValue from '../PartneringValue/PartneringValue';
import QualityStuff from '../QualityStuff/QualityStuff';
import Services from '../Services/Services';
import "./HomeContainer.css";

const HomeContainer = () => {
    return (
        <div>
          {/* Header Banner And Names Part  */}
          <Header/> 

          {/* Content Area For Header Banner Fixed  */}
          <div className="content-area pt-4">
            <Services/>
          <CabinCategories/>   
          <QualityStuff/>  
          <PartneringValue/>
          </div>

        </div>
    );
};

export default HomeContainer;