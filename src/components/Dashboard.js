import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import trashubImage from '../assets/trashub.jpg'; 

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/trashlist');
  };

  return (
    <div className="dashboard-container" style={{fontFamily: 'Georgia'}}>
      <Navbar activeItem="dashboard" /> {/* Pass "dashboard" as active item */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card text-center"
              onClick={handleCardClick}
              style={{ cursor: 'pointer' }}
            >
              <img src={trashubImage} className="card-img-top" alt="trashub" />
              <div className="card-body">
                <h5 className="card-title">Data Sampah</h5>
                <p className="card-text">Pengelolaan data sampah Aplikasi Trashub</p>
                <a href="/trashlist" className="btn btn-primary">Detail Data</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;