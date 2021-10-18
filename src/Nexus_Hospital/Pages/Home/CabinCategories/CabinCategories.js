import React from 'react';
import "./CabinCategories.css";

const CabinCategories = () => {
    return (
        <div>
            <h1 className="fw-bold cabin">CABINS CATEGORIES </h1>
     <div className="container">
     <div className="row row-cols-2 pt-3 rounded-3">

        <div className="col col-12 col-md-12 col-lg-6">

        <div id="carouselExampleCaptions" className="carousel slide pt-3" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/156196203_1178510249249715_129618128177012540_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=6KTx5CChYt8AX82A1Bu&_nc_ht=scontent.fdac7-1.fna&oh=35e1af37e10bf0aa98f1dfec07a14e5a&oe=61933689" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
            <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/156291196_1178510272583046_770505320529887014_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=IuRuNqf7uaMAX_kkXAL&_nc_ht=scontent.fdac7-1.fna&oh=edbc258d6eb88f688b164ec5a524e00d&oe=6192E2B2" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
            <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/155477969_1178510232583050_7377614474246124308_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cV4JTPc5gLgAX_cnBbx&_nc_ht=scontent.fdac7-1.fna&oh=bd962477328cdd7cf0af8dd8ec5cda0c&oe=6192F3EE" className="d-block w-100" alt="..."/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>

        <div className="col col-12 col-md-12 col-lg-6 d-flex align-items-center mt-3">
                <div className="shadow-sm p-3 rounded-3">
                <h1 className="text-primary">BED & ROOM CATEGORIES</h1>
                    <p className="text-secondary"><small>
                    You may choose from different categories of in-patient beds/rooms of the hospital, including General Ward, AC Ward, Single Bed  (AC/ Non AC), Double Bed (AC/Non AC), Deluxe Cabin and   VIP Cabin. Beds/Cabins are allotted depending on your choice and availability.    
                    </small></p>
                    <h1  className="text-primary"> NURSING CARE</h1>
                    <p className="text-secondary">
                    <small>
                    DCIMCH provides 24-hours comprehensive, individualized nursing care for in-patients based on their assessed nursing needs. To provide best quality nursing care, the nursing personnel’s are selected on merit basis and thereafter prepared adequately by education and Hands-on Training. 
                    </small>
                    </p>
                </div>
        </div>
    </div>
    <div className="bg-dark mt-5 mb-5"><hr /></div>
     </div>
     
        </div>
    );
};

export default CabinCategories;