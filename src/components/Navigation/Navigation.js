import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link}  style={({ isActive }) =>({color: isActive ? 'orangered' : 'dodgerblue'})} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link}  style={({ isActive }) =>({color: isActive ? 'orangered' : 'dodgerblue'})} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
