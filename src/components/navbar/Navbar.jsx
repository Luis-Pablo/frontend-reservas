import {Link, useNavigate} from 'react-router-dom'
import "./navbar.css"
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import toast, { Toaster } from "react-hot-toast";

const image =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80";

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false)
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const logout = () => {
    try {
      dispatch({ type: "LOGOUT" });
      toast.success("Cerrando sesión", {
        duration: 1500,
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">Reservas online</span>
        </Link>
        {user ? (
          <>
            <div className="navUserIsLog">
              <div className="navImg">
                <img
                  src={image}
                  alt=""
                  onClick={() => setOpenProfile((prev) => !prev)}
                />
              </div>
              <div className="navUser">
                <span>{user.username}</span>
                {openProfile && (
                  <ul className="navDropDown">
                    <li>
                      <span onClick={logout}>Cerrar sesión</span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </>
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
      <Toaster/>
    </div>
  );
}

export default Navbar