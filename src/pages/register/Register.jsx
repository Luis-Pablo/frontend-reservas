import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import "./register.css";


const host = import.meta.env.VITE_REACT_APP_HOST;

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    email: undefined
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const register = async (e) => {    
    try {
      const res = await axios.post(`${host}/auth/register`, credentials);      
      toast.success("Usuario creado con éxito", {
        duration: 2000,
        position: "top-center",
      });

      setTimeout(() => { navigate("/login"); }, 2500)
    } catch (err) {
      toast.error('Usuario no pudo ser creado', {
        duration: 1500,
        position: "top-right",
      });
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <label htmlFor="label">Registro</label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          id="username"
          className="rInput"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="rInput"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          id="password"
          className="rInput"
          onChange={handleChange}
        />
        <button className="rButton" onClick={register}>
          Ingresar
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default Register;
