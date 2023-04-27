import { Link } from "react-router-dom";
import SignForm from "../style/Sign-in-up.style.js";

const SignUp = () => {
  return (
    <SignForm title="Sign up">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Repeat password" />
      <button type="submit">Register</button>
      <div>
        <Link to="/signIn">Log in</Link>
        <Link to="/">keep as a guest</Link>
      </div>
    </SignForm>
  );
};
export default SignUp;
