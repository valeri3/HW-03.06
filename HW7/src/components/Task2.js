import { Link, Outlet } from 'react-router-dom';
import './Task2-style.css';

export const MainPage = () => (
    <>
      <nav className='header-nav'>
        <ul className='header-nav__list'>
          <li className='header-nav__element'>
            <Link to="/new-arrivals" className='header-nav__link'>Новинки</Link>
          </li>
          <li>
            <Link to="/promotions" className='header-nav__link'>Акции</Link>
          </li>
          <li>
            <Link to="/in-stock-products" className='header-nav__link'>Товары в наличии</Link>
          </li>
          <li>
            <Link to="/delivery-and-payment" className='header-nav__link'>Доставка и оплата</Link>
          </li>
          <li>
            <Link to="/forums" className='header-nav__link'>Форумы</Link>
          </li>
          <li>
            <Link to="/about-us" className='header-nav__link'>О нас</Link>
          </li>
          <li>
            <select id="language" name="language">
              <option value="uk">Українська</option>
              <option value="en">English</option>
            </select>
          </li>
        </ul>
      </nav>
      <hr/>

      <Outlet/>
    </>

);