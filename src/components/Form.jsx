import { FaEye } from "react-icons/fa";
import { useState } from "react";

const Form = (props) => {
  console.log(props);
  const [viewPassword1, setViewPassword1] = useState(false);
  const [viewPassword2, setViewPassword2] = useState(false);

  const toggleEye1 = () => {
    setViewPassword1(!viewPassword1);
  };
  const toggleEye2 = () => {
    setViewPassword2(!viewPassword2);
  };

  return (
    <>
      <form onSubmit={props.func}>
        <h2> Create Acccount</h2>
        <div>
          <p>Name</p>
          <input
            type="text"
            placeholder="John Doe"
            value={props.username}
            onChange={(event) => {
              props.setUsername(event.target.value);
            }}
          />

          <p>Email</p>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            value={props.email}
            onChange={(event) => {
              props.setEmail(event.target.value);
            }}
          />
          <p>Password</p>
          <input
            className={props.showError ? "error" : "correct"}
            type={viewPassword1 ? "text" : "password"}
            placeholder="Ffkge23h85fT"
            value={props.password}
            onChange={(event) => {
              props.setPassword(event.target.value);
            }}
          />
          <FaEye
            className="eye1"
            onClick={() => {
              toggleEye1();
            }}
          />
          <p>Confirm your password</p>
          <input
            className={props.showError ? "error" : "correct"}
            type={viewPassword2 ? "text" : "password"}
            placeholder="Ffkge23h85fT"
            value={props.confirmPassword}
            onChange={(event) => {
              props.setconfirmPassword(event.target.value);
            }}
          />
          <FaEye
            className="eye2"
            onClick={() => {
              toggleEye2();
            }}
          />
          <p className="errorFalsePassword">
            {props.showError && "Les mots de passe ne sont pas identiques"}
          </p>
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};

export default Form;
