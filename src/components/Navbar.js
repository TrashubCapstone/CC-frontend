import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './styles.css';

const Navbar = ({ activeItem }) => {
  const navigate = useNavigate(); 

  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Logout', path: '/logout' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-sm bg-recycle-green bg-light fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-white" to="/dashboard">
          TRASHUB
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <NavLink
                  to={item.path}
                  className={`nav-link ${activeItem === item.name ? 'active' : ''} text-white`}
                  aria-current={activeItem === item.name ? 'page' : undefined}
                  onClick={item.name === 'Logout' ? handleLogout : undefined}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;