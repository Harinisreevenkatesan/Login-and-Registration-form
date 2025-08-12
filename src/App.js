import React, { useState } from "react";
import LoginForm from "./loginform";
import RegistrationForm from "./Registrationform";
import "./Form.css";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>

      {showLogin ? (
        <>
          <LoginForm />
          <p style={{ textAlign: "center" }}>
            Don’t have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setShowLogin(false)}
            >
              Register here
            </span>
          </p>
        </>
      ) : (
        <>
          <RegistrationForm />
          <p style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setShowLogin(true)}
            >
              Login here
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default App;