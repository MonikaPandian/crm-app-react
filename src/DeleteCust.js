import React from 'react';
import Footer from './Footer';
import Logout from './Logout';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DeleteCustomer from './DeleteCustomer';

const EditCust = () => {
    
  return (
    <div id="pagetop">        
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">               
                <div id="content">
                    <Navbar />
                    <div className="container-fluid">
                        <DeleteCustomer/>
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

export default EditCust;
