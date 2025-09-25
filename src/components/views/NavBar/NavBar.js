import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg' className='mb-4 rounded'>
      <Nav className='me-auto'>
        <NavLink to='/' className={styles.navLink}>
          Reservation App
        </NavLink>
      </Nav>
      <Nav>
        <NavLink to='/' className={styles.navLink}>
          Strona główna
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
