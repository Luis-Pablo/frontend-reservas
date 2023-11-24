import { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const host = import.meta.env.VITE_REACT_APP_HOST;
console.log(host)
console.log(import.meta.env.VITE_REACT_APP_HOST);
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const login = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    
    try {
      toast.loading("Espere...");
      const res = await axios.post(
        `${host}/auth/login`,
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      toast.dismiss();
      toast.success("Bienvenido al sistema", {
        duration: 2000,
        position: "top-right",
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      toast.dismiss();
      toast.error(`Error de acceso: ${err.response.data.message}`, {
        duration: 2000,
        position: "top-right",
      });
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="containerLog">
      <div className="con">
        <input type="checkbox" className="label" aria-hidden="true" />
        <div className="login">
          <div className="lContainer">
            <label htmlFor="label">Iniciar sesión</label>
            <input
              type="text"
              placeholder="Nombre de usuario"
              id="username"
              className="lInput"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Contraseña"
              id="password"
              className="lInput"
              onChange={handleChange}
            />
            <button className="lButton" onClick={login}>
              Ingresar
            </button>
            {error && <span>{error.message}</span>}
          </div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Login;
