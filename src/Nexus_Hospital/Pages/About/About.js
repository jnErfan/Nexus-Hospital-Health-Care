import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className="container">
            <div>
            <div className="">
                <h1 className="Specialties mb-5">Our Specialties</h1>
                <h1 className="">Trusted Nexus Service</h1>
                <p className="text-secondary">
                Reason why you should choose us
                We have introduced the principle of family medicine, which means that the family practitioner will handle the majority of medical requests, with a specialists involved only if necessary.
                </p>
             </div>
             <div className="row row-cols-3 mt-5">
                 <div className="col col-12 col-md-6 col-lg-4">

                 <div className="d-flex pt-5 text-end">
                               
                                <div>
                                    <h1>Testing Labs</h1>
                                    <p className="text-secondary">
                                    We are not just a regular clinic, but a medical service provider, with which you can share any problem
                                    </p>
                                </div>
                                <div>
                                    <img className="ps-3 pt-2" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/ab2.png" alt="" />
                                </div>
                     </div>

                    <div className="d-flex pt-5 text-end">
                               
                                <div>
                                    <h1>Work By Heart</h1>
                                    <p className="text-secondary">
                                    heart receives oxygen-poor blood from your veins and pumps it to your lungs, where it picks up oxygen and gets rid of carbon dioxide.
                                    </p>
                                </div>
                                <div>
                                    <img className="ps-3 pt-2" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/ab4.png" alt="" />
                                </div>
                     </div>
                 </div>


                 <div className="col col-12 col-md-6 col-lg-4 animate__animated animate__pulse animate__slow animate__infinite mt-5">
                        <img className="animateImage" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/About-1.png" alt="" />
                 </div>


                 <div className="col col-12 col-md-6 col-lg-4">
                
                 <div className="d-flex pt-5 text-start">
                                <div>
                                    <img className="pe-3 pt-2" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/ab3.png" alt="" />
                                </div>
                                <div>
                                    <h2>Affordable Prices</h2>
                                    <p className="text-secondary">
                                    These words are often used together. You can go to the definition of affordable or the definition of price. Or, see other combinations with price.
                                    </p>
                                </div>
                     </div>
                    <div className="d-flex pt-5 text-start">
                                <div>
                                    <img className="pe-3 pt-2" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/ab6.png" alt="" />
                                </div>
                                <div>
                                    <h2>Experienced Experts</h2>
                                    <p className="text-secondary">
                                    Hitherto those experienced experts saying "it will never happen" went on to say "the people are fundamentally happy with the way we run Britain".
                                    </p>
                                </div>
                     </div>


                    </div>
             </div>
        
            </div>
        </div>
    );
};

export default About;