import React from 'react';
import {NavLink} from 'react-router-dom';
import '../style/Header.css';
import logo from '../imagenes/logo.svg';
import menuIcon from '../imagenes/menuIcon.svg';
function Header() {
  const isLoggedIn =  true;
  return (
    <div className="nkn-navbar">
      <div className="nkn-navbar-heading" >
          <div className="nkn-brand">
            <img src={logo} alt='Logo de la aplicación nuestra tierra'/>
          </div>
          <div className="nkn-icon-toggle" data-nkn-role="navbar-toggle">
              <img className="nkn-icon" src={menuIcon} alt='menuIcon'/>
          </div>
      </div>
      {isLoggedIn?
      (<nav className="nkn-navbar-content">
          <ul className="nkn-nav">
              <li className="nkn-nav-item">

                <NavLink to='/publicar' activeclassname='active'>Publicar Terrenos</NavLink>
              </li>
              <li className="nkn-nav-item">
                <NavLink to='/buscar' activeclassname='active'>Buscar Terrenos</NavLink>

              </li>
              <li className="nkn-nav-item">
                <button className="nkn-button login" data-nkn-role="open-modal" data-nkn-target="modal-medium">Logout</button>
              </li>
          </ul>
      </nav>):null
      }
    </div>
  );
}

export default Header;
