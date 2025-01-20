import './NavBar.css';
import logo from './logo.png';

function NavBar() {
  return (
    <div className="NavBar">
        <img src = {logo} />
        <h2>Home</h2>
        <h2>Why F1 Approved?</h2>
        <h2>About Us</h2>
        <h2>LogIn</h2>
        <h2>Register</h2>
    </div>
  );
}

export default NavBar;
