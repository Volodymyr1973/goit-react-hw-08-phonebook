import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={css.link}
        style={({ isActive }) => ({
          color: isActive ? 'orangered' : 'dodgerblue',
        })}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={css.link}
        style={({ isActive }) => ({
          color: isActive ? 'orangered' : 'dodgerblue',
        })}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};
