import React from 'react';
import "./Contract.css";

const Contract = () => {
    return (
        <div className="container contractConatiner" id="contractus">
            <div data-aos="flip-right" data-aos-duration="1000" className="">
                <h1 className="contarctUs mb-5">Contract Us</h1>
            </div>
           <div className="row row-cols-2">
               <div className="col col-12 col-md-6 col-lg-5">
                   <div className="shadow-lg p-3 rounded-3">
                   <h1 className="mb-4  mt-4">
                       Contract Info
                   </h1>
                  <div className="text-start">
                  <div>
                   <i className="fas fa-home fs-4 me-3 text-secondary mt-3"></i>
                   <span className="text-secondary"> 29, Nexus Hospital Building, Mymensingh 2200</span>
                   </div>
                   <div>
                   <i className="fas fa-phone-alt text-secondary fs-4 me-3 mt-3"></i>
                   <span className="text-secondary">+88 01796-586561</span>
                   </div>
                   <div>
                   <i className="far fa-envelope text-secondary fs-4 me-3 mt-3"></i>
                   <span className="text-secondary">nexus.clinic1@gmail.com</span>
                   </div>
                   <div className="mb-4 pb-2">
                   <i className="fas fa-tty text-secondary fs-4 me-3 mt-3"></i>
                   <span className="text-secondary">(+84) 329 621 991</span>
                   </div>
                  </div>
                   </div>
               </div>
               <div className="col col-12 col-md-6 col-lg-7">   
                    <div className="shadow-lg p-3 rounded-3">

                    <h1 className="mb-4 mt-4">
                       Send  Message
                   </h1>
                   <div className="text-start">
                   <div className="d-flex">
                   <input className="me-3 w-75 py-2" placeholder="Name" type="text" name="" id="" />
                   <input className="me-3 w-50 py-2" placeholder="Email" type="email" name="" id="" />
                   <input className="me-3 w-50 py-2" placeholder="Website" type="url" name="" id="" />
                   </div>
                   <textarea className="mt-3 w-100" placeholder="Message" id="w3review" name="w3review" rows="4" cols="50" />
                   </div>
                    <button className="btn btn-secondary px-4 container-fluid">Send</button>
                    
                    </div>      
               </div>
           </div>
          <div className="d-flex align-items-center justify-content-center mt-5 shadow-lg p-3 rounded-3">
              <div className="bg-secondary p-3 rounded-3 me-3">
              <i className="fas fa-phone-volume fs-1 text-white"></i>
              </div>
              <div>
              <p>Call Us For Any Question</p>
                <h3>+84888666888</h3>
              </div>
          </div>
        </div>
    );
};

export default Contract;