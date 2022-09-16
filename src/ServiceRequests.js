import React from 'react';
import Footer from './Footer';
import Logout from './Logout';
import Navbar from './Navbar';
import ServiceRequest from './ServiceRequest';
import Sidebar from './Sidebar';

const ServiceRequests = () => {
    
  return (
    <div id="pagetop">        
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">               
                <div id="content">
                    <Navbar />
                    <div className="container-fluid">
                        <ServiceRequest/>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
        <a className="scroll-to-top rounded" href="#pagetop">
            <i className="fas fa-angle-up"></i>
        </a>
        <Logout />
    </div>
  )
}

export default ServiceRequests;
