import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const MainPage2 = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigate('Home')}> Page One </button>
          </li>
          <li>
            <button onClick={() => navigate('About')}> Page Two </button>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </>
  )
};