import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  return (
    <div className="w-[350px] mt-14 mx-auto flex flex-col gap-8 items-start">
      <FontAwesomeIcon icon={faTwitter} className="text-blue-500 text-5xl" />
      <h1 className="text-3xl font-bold">Log in to Twitter</h1>
      <form className="flex flex-col gap-6 w-full">
        <input
          className="px-2 py-4 rounded-sm border border-slate-300"
          placeholder="Email address"
          type="email"
        />
        <input
          className="px-2 py-4 rounded-sm border border-slate-300"
          placeholder="Password"
          type="password"
        />

        <button className="bg-blue-500 text-white rounded-full p-4 text-center">
          Log in
        </button>
      </form>
      <div className="flex justify-between text-blue-500 w-full">
        <Link to="/password-reset">Forgot Password?</Link>
        <Link to="/password-reset">Sign up to Twitter</Link>
      </div>
    </div>
  );
}

export default Login;
