import SignForm from "../style/Sign-in-up.style.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // caso usuário já esteja logado, mostrar opção de termianr sessão
  if (localStorage.getItem("token")) {
    navigate("/cart");
  }
  //
  const formSubmit = async (event) => {
    event.preventDefault();
    if (email.length > 5 && password.length > 5) {
      try {
        const body = { email, password };
        const token = await axios.post("http://localhost:5000/login", body);
        localStorage.setItem("token", token.data);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Formulário inválido");
    }
  };

  const inputEmail = ({ target }) => {
    const emailRegex = RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
    if (emailRegex.test(target.value)) {
      setEmail(target.value);
      target.style.border = "1px solid cyan";
    } else {
      target.style.border = "1px solid purple";
    }
  };
  const inputPassword = ({ target }) => {
    if (target.value.length > 5) {
      setPassword(target.value);
      target.style.border = "1px solid cyan";
    } else {
      target.style.border = "1px solid purple";
    }
  };
  return (
    <SignForm title="Sign in" onSubmit={formSubmit}>
      <input type="email" onChange={inputEmail} placeholder="Email" />
      <input type="password" onChange={inputPassword} placeholder="Password" />
      <button type="submit">Log In</button>
      <Link to="/signUp">Authorize with Google</Link>
      <div>
        <Link to="/signUp">Register</Link>
        <Link to="/signUp">Forgot password?</Link>
      </div>
    </SignForm>
  );
};
export default SignIn;
