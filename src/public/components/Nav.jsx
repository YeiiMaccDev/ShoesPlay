import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Dashboard, Logout, Person } from '@mui/icons-material';

import { useAuthStore } from '../../hooks';
import './Nav.css'
import { Typography } from '@mui/material';

export const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { status} = useAuthStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log('Menu')

  return (
    <div className="navbar-site">
      <nav className="navbar-site__navbar">
        <button
          className={`navbar-site__toggler ${(isMenuOpen) ? 'toggler-open' : ''}  `}
          aria-label="Menu"
          onClick={() => toggleMenu()}
        >
          <span
            className="navbar-site__toggler__span"
            onClick={() => toggleMenu()}
          ></span>
        </button>
        <Link
          to="/"
          href="/" className="navbar-site__logo">
          <img src="/images/logo60.png" className="navbar-site__logo-img" width="60" height="60"
            srcSet='/images/logo60.png 60w, /images/logo.png 120w' alt="Logo" />
          <strong className="navbar-site__logo-strong">ShoesPlay</strong>
        </Link>
        <ul className={`navbar-site__list ${(isMenuOpen) ? 'open' : ''} `}>
          <li className="navbar-site__item navbar-site__item-search">
            <div className="navbar-site__search">
              <input className="navbar-site__search-input outline-none" id="search-input" type="text"
                placeholder="Qué deseas buscar?" aria-label="Search" />
              <button className="btn btn-light navbar-site__button" id="search-btn" title="Buscar." aria-label="Buscar">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </li>
          <li className="navbar-site__item">
            <NavLink
              to="/"
              className={({ isActive }) => `navbar-site__link ${isActive ? 'navbar-site__active' : ''}`}>
              Inicio
            </NavLink>
          </li>
          <li className="navbar-site__item">
            <NavLink
              to="/products"
              className={({ isActive }) => `navbar-site__link ${isActive ? 'navbar-site__active' : ''}`}>
              Productos
            </NavLink>
          </li>
          <li className="navbar-site__item">
            <NavLink
              to="/offers"
              className={({ isActive }) => `navbar-site__link ${isActive ? 'navbar-site__active' : ''}`}>
              Ofertas
            </NavLink>
          </li>
          <li className="navbar-site__item">
            <NavLink
              to="/about"
              className={({ isActive }) => `navbar-site__link ${isActive ? 'navbar-site__active' : ''}`}>
              Nosotros
            </NavLink>
          </li>
          {/* <li className="navbar-site__item btn btn-login">
            <a className="navbar-site__link" href="assets/login.html">
              <button className="btn btn-light navbar-site__button login-btn" title="Iniciar Sesión"
                aria-label="Iniciar Sesión.">
                <i className="fa-solid fa-user"></i>
                <strong className="navbar-site__login-strong">Login</strong>
              </button>
            </a>
          </li> */}
        </ul>

        {
          (status === 'authenticated')
            ? (
              <NavLink to="/dashboard" >
                <button className="btn" title="Dashboard" aria-label="Dashboard." >
                  <Dashboard />
                  <Typography >Dashboard</Typography>
                </button>
              </NavLink>)
            : (
              <NavLink to="/auth/login" >
                <button className="btn" title="Login" aria-label="Login." >
                  <Person />
                  <Typography >Login</Typography>
                </button>
              </NavLink>)
        }



      </nav>
    </div>
  )
}
