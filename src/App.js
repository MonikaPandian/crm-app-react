import './App.css';
import { Routes, Route} from "react-router-dom";
import LoginForm from './LoginForm';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import Logout from './Logout';
import Dashboard from './Dashboard';

function App() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
               
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <Logout />
    </div>
  );
}

export default App;
