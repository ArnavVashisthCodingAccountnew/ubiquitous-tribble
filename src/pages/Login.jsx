import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: "" });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      showNotification("Please fill in both fields");
      return;
    }
    const data = { email, password };
    try {
      const res = await fetch("https://nixun-api.onrender.com/check_user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.status === "OK") {
        localStorage.setItem("login", "true");
        showNotification("Login successful!");
        navigate("/");
      } else {
        showNotification(json.message || "Login failed");
      }
    } catch (err) {
      showNotification("Error: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="left">
        <img className="logo" src="/assets/Global/logo.png" alt="logo" />
        <div className="content">
          <h1 className="welcome-text">Welcome Back</h1>
          <p className="subtitle">
            Your work, your team, your flow - all in one place
          </p>

<<<<<<< HEAD
          <div className="idk">
            <button className="google">
              <img src="/assets/Login/google.png" className="icon" alt="g" />
              Sign in with Google
            </button>
            <button className="github">
              <img src="/assets/Login/apple.png" className="icon" alt="gh" />
              Sign in with Apple ID
            </button>
          </div>

          <img className="or" src="/assets/Login/or.png" alt="or" />
=======
          <div className="social-login">
            <button type="button" className="social-btn google" onClick={() => showNotification("Google login coming soon")}>
              <img src="/assets/Login/google.png" className="icon" alt="Google" />
              Sign in with Google
            </button>
            <button type="button" className="social-btn microsoft" onClick={() => showNotification("Microsoft login coming soon")}>
              <img src="/assets/Login/microsoft.svg" className="icon" alt="Microsoft" />
              Sign in with Microsoft
            </button>
          </div>

          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-text">or</span>
            <span className="divider-line"></span>
          </div>
>>>>>>> 293b6c05c8f4b735f1a044c693bff1ff1a81567f

          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                id="email"
                placeholder=" "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
<<<<<<< HEAD
=======
                autoComplete="username"
>>>>>>> 293b6c05c8f4b735f1a044c693bff1ff1a81567f
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                placeholder=" "
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
<<<<<<< HEAD
=======
                autoComplete="current-password"
>>>>>>> 293b6c05c8f4b735f1a044c693bff1ff1a81567f
              />
              <label htmlFor="password">Password</label>
            </div>

            <button className="login-btn" type="submit">
              Sign in with email
            </button>
<<<<<<< HEAD

            <p className="signin-text">
              Dont have an account?
              <span onClick={() => navigate('/login')}>Sign Up</span>
            </p>
          </form>

          <div className="footer">Help / Terms / Privacy</div>
=======
          </form>

          <p className="signup-text">
            Don't have an account?{' '}
            <span className="signup-link" onClick={() => navigate('/signup')}>Sign Up</span>
          </p>
        </div>
        
        <div className="footer">
          <a href="/help">Help</a>
          <span> / </span>
          <a href="/terms">Terms</a>
          <span> / </span>
          <a href="/privacy">Privacy</a>
>>>>>>> 293b6c05c8f4b735f1a044c693bff1ff1a81567f
        </div>
      </div>

      <div className="right">
<<<<<<< HEAD
        <img className="side" src="/assets/Login/side-pic.png" alt="side" />
      </div>

      <div
        id="notification"
        className={`notification ${!notification.show ? "hidden" : ""}`}
      >
        <span className="tick">✓</span>
        <span id="notification-text">{notification.message}</span>
=======
        <img className="side" src="/assets/Login/side-pic.png" alt="Side illustration" />
      </div>

      <div
        className={`notification ${!notification.show ? "hidden" : ""}`}
        onClick={() => setNotification({ ...notification, show: false })}
      >
        <span className="tick">✓</span>
        <span className="notification-text">{notification.message}</span>
>>>>>>> 293b6c05c8f4b735f1a044c693bff1ff1a81567f
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> 293b6c05c8f4b735f1a044c693bff1ff1a81567f
