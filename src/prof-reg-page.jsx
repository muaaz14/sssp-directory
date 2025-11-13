import Navbar from './components/navbar'
import RegisterForm from "./pages/RegisterWizard.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './prof-reg-page.css'



const ProfReg = () => {

    return (
        <div className="responsive-container">
            <div className="page-body">
                <div className="nav-cont">
                    <Navbar /> 
                </div>
                <div className="form-body">
                    <div className="header-section">
                        <div className="container">
                            <h3>National Directory <br></br>of Soil Science Professionals</h3>
                            <p>Advancing soil science research and promoting sustainable agricultural practices in Pakistan.</p>
                            <a>
                                <Link to="/">Explore Directory</Link>
                            </a>
                        </div>
                        <div className="container">
                            <p>All information will be kept confidential and used solely for membership and professional networking purposes.</p>
                        </div>
                    </div>
                    <div className="nav-cont">
                        <RegisterForm />
                    </div>
                </div>

                


            </div>
        </div>
    );

}

export default ProfReg;