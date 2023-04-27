import { Link } from "react-router-dom";
import SignForm from "../style/Sign-in-up.style.js";

const SignIn = () => {
  return (
    <SignForm title="Sign in">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
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
