import { useState } from "react";

const API_URL = "http://localhost:5000/api/auth";

function Auth({ onLogin }) {
  const [mode, setMode] = useState("login");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const endpoint =
        mode === "login"
          ? "/login"
          : "/register";

      const requestBody =
        mode === "login"
          ? {
              email,
              password,
            }
          : {
              name,
              email,
              phone,
              password,
            };

      const response = await fetch(
        `${API_URL}${endpoint}`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessageType("error");
        setMessage(
          data.message || "Something went wrong."
        );
        setLoading(false);
        return;
      }

      localStorage.setItem(
        "sr_token",
        data.token
      );

      localStorage.setItem(
        "sr_user",
        JSON.stringify(data.user)
      );

      setMessageType("success");
      setMessage(
        mode === "login"
          ? "Login successful!"
          : "Account created successfully!"
      );

      setTimeout(() => {
        onLogin(data.user);
      }, 500);

    } catch (error) {
      console.error(error);

      setMessageType("error");

      setMessage(
        "Unable to connect to SR Enterprises server."
      );
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setMode(
      mode === "login"
        ? "register"
        : "login"
    );

    setName("");
    setPhone("");
    setEmail("");
    setPassword("");

    setMessage("");
    setShowPassword(false);
  };

  return (
    <div className="auth-page">

      {/* =========================
          LEFT SIDE
      ========================== */}

      <div className="auth-showcase">

        <div className="auth-showcase-content">

          <div className="auth-brand">
            <div className="auth-brand-logo">
              SR
            </div>

            <span>
              SR ENTERPRISES
            </span>
          </div>

          <div className="auth-showcase-main">

            <span className="auth-eyebrow">
              QUALITY • VALUE • SERVICE
            </span>

            <h1>
              Upgrade Your Home.
              <br />
              <span>Live Better.</span>
            </h1>

            <p>
              Discover quality appliances and
              electronics from trusted brands at
              great prices.
            </p>

            <div className="auth-benefits">

              <div>
                <span>✓</span>
                <div>
                  <strong>
                    Trusted Products
                  </strong>

                  <small>
                    Quality appliances and electronics
                  </small>
                </div>
              </div>

              <div>
                <span>₹</span>
                <div>
                  <strong>
                    Great Prices
                  </strong>

                  <small>
                    Value for every purchase
                  </small>
                </div>
              </div>

              <div>
                <span>★</span>
                <div>
                  <strong>
                    Reliable Service
                  </strong>

                  <small>
                    We're here to help you
                  </small>
                </div>
              </div>

            </div>

          </div>

          <div className="auth-showcase-footer">
            © 2026 SR Enterprises
          </div>

        </div>

      </div>


      {/* =========================
          RIGHT SIDE
      ========================== */}

      <div className="auth-form-area">

        <div className="auth-form-container">

          <div className="auth-mobile-brand">

            <div className="auth-brand-logo">
              SR
            </div>

            <strong>
              SR ENTERPRISES
            </strong>

          </div>


          {/* HEADER */}

          <div className="auth-form-header">

            <h2>
              {mode === "login"
                ? "Welcome back"
                : "Create your account"}
            </h2>

            <p>
              {mode === "login"
                ? "Sign in to continue shopping with us."
                : "Join SR Enterprises and start shopping."}
            </p>

          </div>


          {/* FORM */}

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {mode === "register" && (
              <>

                <div className="auth-field">

                  <label>
                    Full Name
                  </label>

                  <div className="auth-input-wrapper">

                    <span className="auth-input-icon">
                      👤
                    </span>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      required
                    />

                  </div>

                </div>


                <div className="auth-field">

                  <label>
                    Mobile Number
                  </label>

                  <div className="auth-input-wrapper">

                    <span className="auth-input-icon">
                      📱
                    </span>

                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      value={phone}
                      onChange={(event) =>
                        setPhone(event.target.value)
                      }
                      required
                    />

                  </div>

                </div>

              </>
            )}


            {/* EMAIL */}

            <div className="auth-field">

              <label>
                Email Address
              </label>

              <div className="auth-input-wrapper">

                <span className="auth-input-icon">
                  ✉
                </span>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="auth-field">

              <label>
                Password
              </label>

              <div className="auth-input-wrapper">

                <span className="auth-input-icon">
                  🔒
                </span>

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* MESSAGE */}

            {message && (

              <div
                className={
                  messageType === "success"
                    ? "auth-alert auth-alert-success"
                    : "auth-alert auth-alert-error"
                }
              >
                <span>
                  {messageType === "success"
                    ? "✓"
                    : "!"}
                </span>

                {message}
              </div>

            )}


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="auth-submit"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="auth-spinner"></span>
                  Please wait...
                </>
              ) : (
                mode === "login"
                  ? "Login"
                  : "Create Account"
              )}

            </button>

          </form>


          {/* SWITCH */}

          <div className="auth-switch">

            <span>
              {mode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </span>

            <button
              type="button"
              onClick={switchMode}
            >
              {mode === "login"
                ? "Create Account"
                : "Login"}
            </button>

          </div>


          <div className="auth-security">

            <span>🔒</span>

            <span>
              Your account information is securely
              processed.
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Auth;