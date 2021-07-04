import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div className="page">
      <header className="page-header">
        <div className="container">
          <nav className="page-main-nav">
            <ul className="page-main-nav__list">
              <li className="page-main-nav__list-item">
                <Link to="/">Home Page</Link>
              </li>
              <li className="page-main-nav__list-item">
                <Link to="/continents">Continents</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="page-main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="page-footer">
        <div className="container">
          <p className="copyright">react-countries &copy; {new Date().getFullYear()}</p>
          <p className="copyright">Created with ❤️ by hub33k</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
