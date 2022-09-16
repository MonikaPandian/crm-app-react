import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    return (

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin Dashboard</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" onClick={() => navigate("/dashboard")}>
                    <i class="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Dashboard</span>
                </a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - customers Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCustomers"
                    aria-expanded="true" aria-controls="collapseCustomers">
                    <i class="fa-solid fa-users"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Customers</span>
                </a>
                <div id="collapseCustomers" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Customers</h6>
                        <a className="collapse-item" onClick={() => navigate("/customers")}>List customers</a>
                        <a className="collapse-item" onClick={() => navigate("/add-customer")}>Add customer</a>
                    </div>
                </div>
            </li>


            {/* <!-- Nav Item - Leads Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLeads"
                    aria-expanded="true" aria-controls="collapseLeads">
                    <span><i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Leads</span>
                </a>
                <div id="collapseLeads" className="collapse" aria-labelledby="headingLeads"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Leads</h6>
                        <a className="collapse-item" onClick={() => navigate("/leads")}>List Leads</a>
                        <a className="collapse-item" onClick={() => navigate("/add-lead")}>Add Lead</a>
                    </div>
                </div>
            </li>

            {/* <!-- Nav Item - Tasks Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTask"
                    aria-expanded="true" aria-controls="collapseTasks">
                    <span><i class="fa-solid fa-square-check fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tasks</span>
                </a>
                <div id="collapseTask" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Tasks</h6>
                        <a className="collapse-item" onClick={() => navigate("/tasks")}>Running Task</a>
                        <a className="collapse-item" onClick={() => navigate("/tasks")}>Archive Task</a>
                    </div>
                </div>
            </li>


            {/* <!-- Nav Item - Service Requests --> */}
            <li className="nav-item">
                <a className="nav-link" href="" onClick={() => navigate("/service-requests")}>
                    <i class="fa-solid fa-server"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Service Requests</span>
                </a>
            </li>


            {/* <!-- Nav Item - Companies --> */}
            <li className="nav-item">
                <a className="nav-link" href="" onClick={() => navigate("/companies")}>
                    <i class="fa-solid fa-building"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Companies</span>
                </a>
            </li>


            {/* <!-- Nav Item - Contacts --> */}
            <li className="nav-item">
                <a className="nav-link" href="" onClick={() => navigate("/contacts")}>
                    <i class="fa-solid fa-address-book"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Contacts</span>
                </a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
        //  {/* <!-- End of Sidebar --> */}
    )
}

export default Sidebar;
