import {Link} from 'react-router-dom'
import "./navbar.css"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


const image =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80";

const Navbar = () => {

  const { user } = useContext(AuthContext);


  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">Reservas online</span>
        </Link>
        {user ? (
          <div className="navUserIsLog">
            <div className="navImg">
              <img src={image} alt="" />
            </div>
            <div className="navUser">{user.username}</div>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register" className="navButton">
              Registro
            </Link>
            <Link to="/login" className="navButton">
              Inicia sesión
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar