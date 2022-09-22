import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginForm from './LoginForm';
import Customers from './Customers';
import Leads from './Leads';
import Tasks from './Tasks';
import ServiceRequests from './ServiceRequests';
import Companies from './Companies';
import Contacts from './Contacts';
import AddCustomers from './AddCustomers';
import AddLeads from './AddLeads';
import Dashboard from './Dashboard';
import Signup from './Signup';
import  EditCust from "./EditCust";
import DeleteCust from './DeleteCust';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/add-customer" element={<AddCustomers />} />
        <Route path="/edit-customer/:id" element={<EditCust />} />
        <Route path="/delete-customer/:id" element={<DeleteCust />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/add-lead" element={<AddLeads />} />
        <Route path="/tasks" element={<Tasks />} />        
        <Route path="/service-requests" element={<ServiceRequests />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
