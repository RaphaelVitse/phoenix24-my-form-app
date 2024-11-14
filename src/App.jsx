import { useState } from "react";
import Footer from "./components/Footer";
import { FaEye } from "react-icons/fa";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [resumeInfos, setResumeInfos] = useState(false);
  const [viewPassord1, setViewPassword1] = useState(false);
  const [viewPassord2, setViewPassword2] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setShowError(true);
    } else if (password === confirmPassword) {
      setResumeInfos(true);
    }
  };

  return (
    <>
      <main className="container">
        <form className={resumeInfos && "hidden"} onSubmit={handleSubmit}>
          <h2> Create Acccount</h2>
          <div>
            <p>Name</p>
            <input
              type="text"
              placeholder="John Doe"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />

            <p>Email</p>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <p>Password</p>
            <input
              className={showError && "error"}
              type={viewPassord1 ? "text" : "password"}
              placeholder="Ffkge23h85fT"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <FaEye
              className="eye1"
              onClick={() => {
                setViewPassword1(true);
              }}
            />
            <p>Confirm your password</p>
            <input
              className={showError && "error"}
              type={viewPassord2 ? "text" : "password"}
              placeholder="Ffkge23h85fT"
              value={confirmPassword}
              onChange={(event) => {
                setconfirmPassword(event.target.value);
              }}
            />
            <FaEye
              className="eye2"
              onClick={() => {
                setViewPassword2(true);
              }}
            />
            <p className="errorPassword">
              {showError && "Les mots de passe ne sont pas identiques"}
            </p>
            <button type="submit">Register</button>
          </div>
        </form>

        <div className={resumeInfos ? "show" : "hidden"}>
          <div className="resumeInfos">
            <div>
              <h2>Result</h2>
              <p>Name : {username}</p>
              <p>Email : {email}</p>
              <p>Password : {password}</p>
              <button type="submit" onClick={() => setResumeInfos(false)}>
                Edit your information
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default App;
