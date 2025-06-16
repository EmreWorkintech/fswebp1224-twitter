import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { username: "", password: "" },
    mode: "onChange",
  });
  const { logIn } = useContext(UserContext);

  function submitFn(data) {
    //TODO
    logIn(data);
  }

  return (
    <div className="w-[350px] mt-14 mx-auto flex flex-col gap-8 items-start">
      <FontAwesomeIcon icon={faTwitter} className="text-blue-500 text-5xl" />
      <h1 className="text-3xl font-bold">Log in to Twitter</h1>
      <form
        className="flex flex-col gap-6 w-full"
        onSubmit={handleSubmit(submitFn)}
      >
        <input
          {...register("username")}
          className="px-2 py-4 rounded-sm border border-slate-300"
          placeholder="Email address"
          type="text"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("password", {
            validate: (value) => {
              return value.length >= 8 || "Strong password giriniz";
            },
          })}
          className="px-2 py-4 rounded-sm border border-slate-300"
          placeholder="Password"
          type="password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <button
          disabled={!isValid}
          className="bg-blue-500 cursor-pointer text-white rounded-full p-4 text-center disabled:bg-slate-400 disabled:text-slate-800 disabled:cursor-not-allowed"
        >
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
