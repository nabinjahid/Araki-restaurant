import { useContext, useEffect, useRef, useState } from "react";
import loginBg from "../../assets/others/authentication.png";
import authentication2 from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const captchaRef = useRef(null);
  // const [disable, setDisable] = useState(true);
  const { LoginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log(location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // captcha validate
    const captchaValue = captchaRef.current.value;
    console.log(captchaValue);
    
    if (validateCaptcha(captchaValue) == true) {
      // setDisable(false);
      console.log(email, password);
      LoginUser(email, password).then((res) => {
        toast("login success");
        navigate(from);
      });
    } else {
      alert("Captcha Does Not Match");
      // setDisable(true);
    }
  };

  // const handlevalidateCaptcha = () => {

  // };

  return (
    <div
      className={`bg-cover bg-center min-h-screen p-20`}
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <div
        className="hero py-20 border shadow-lg"
        style={{
          backgroundImage: `url(${loginBg})`,
          boxShadow: "10px 10px 50px rgba(0, 0, 0, 0.5)", // Right and bottom large shadow
        }}
      >
        <div className="hero-content flex">
          <div className="text-center lg:text-left">
            <img src={authentication2} alt="authentication imag" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label text-blue-600">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  // onBlur={handlevalidateCaptcha}
                  ref={captchaRef}
                  placeholder="Write the text above"
                  name="capcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                {/* <button className="btn btn-primary" disabled={disable}> */}
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
