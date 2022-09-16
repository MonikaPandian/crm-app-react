import React from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from './Footer';
import Logout from './Logout';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Customers from './Customers';
import Leads from './Leads';
import Tasks from './Tasks';
import ServiceRequests from './ServiceRequests';
import Companies from './Companies';
import Contacts from './Contacts';

const New = () => {
  return (
    <div id="pagetop">        
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">               
                <div id="content">
                    <Navbar />
                    <div className="container-fluid">
                         <Routes>                                                      
                            <Route path="/customers" element={<Customers />} />
                            <Route path="/leads" element={<Leads />} />
                            <Route path="/tasks" element={<Tasks />} />
                            <Route path="/service-requests" element={<ServiceRequests />} />
                            <Route path="/companies" element={<Companies />} />
                            <Route path="/contacts" element={<Contacts />} />
                        </Routes>
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

export default New;
