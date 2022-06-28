import React, { useState, useEffect } from "react";
import DateBuider from "../DateBuilder";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMailErrorMsg, setShowMailErrorMsg] = useState(false);
  const [showPasswordErrorMsg, setShowPasswordErrorMsg] = useState(false);

  useEffect(() => DateBuider, []);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!validateMail(email)) {
      setShowMailErrorMsg(true);
      emailInput.classList.add("form-element-error");
    }
    if (validateMail(email)) {
      setShowMailErrorMsg(false);
      emailInput.classList.remove("form-element-error");
    }
    if (!validatePassword(password)) {
      setShowPasswordErrorMsg(true);
      passwordInput.classList.add("form-element-error");
    }
    if (validatePassword(password)) {
      setShowPasswordErrorMsg(false);
      passwordInput.classList.remove("form-element-error");
    }
  };

  const validateMail = (val) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (val.length <= 0 || !regex.test(email)) {
      return false;
    }
    return true;
  };

  const validatePassword = (val) => {
    if (val.length <= 0) {
      return false;
    }
    return true;
  };

  const showErrorForEmail = () => {
    if (showMailErrorMsg) {
      return <p className="tooltip">Please add valid email address</p>;
    }
  };

  const showErrorForPassword = () => {
    if (showPasswordErrorMsg) {
      return <p className="tooltip">Please add valid password</p>;
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Create an account</h2>
      {/* noValidate is there to disable html5 default validation */}
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email" className="form-label">
            Enter your email
          </label>
          <div className="p-relative">
            <input
              className="form-input form-element"
              id="email"
              type="email"
              value={email}
              onChange={emailChangeHandler}
            />
            {showErrorForEmail()}
          </div>
        </div>
        <div className="input-container">
          <label className="form-label">
            Date of birth <small className="small-text">(Optional)</small>
          </label>
          <div className="d-flex">
            <div className="form-label-date form-label-date-day">
              <label htmlFor="day" className="form-label-small">
                Day:
              </label>
              <select
                className="form-element cursor-pointer"
                name="day"
                id="day"
              ></select>
            </div>
            <div className="form-label-date form-label-date-month">
              <label htmlFor="month" className="form-label-small">
                Month:
              </label>
              <select
                className="form-element cursor-pointer"
                name="month"
                id="month"
              ></select>
            </div>
            <div className="form-label-date form-label-date-year">
              <label htmlFor="year" className="form-label-small">
                Year:
              </label>
              <select
                className="form-element cursor-pointer"
                name="year"
                id="year"
              ></select>
            </div>
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="password" className="form-label">
            Choose a strong password
          </label>
          <div className="p-relative">
            <input
              className="form-input form-element"
              id="password"
              type="password"
              value={password}
              onChange={passwordChangeHandler}
            />
            {showErrorForPassword()}
          </div>
        </div>
        <div className="input-container">
          <label className="form-label">Are you an agency or individual?</label>
          <div className="d-flex">
            <div>
              <label
                className="form-input-radio-label cursor-pointer mr-45"
                htmlFor="individual"
              >
              <input
                className="form-input-radio"
                type="radio"
                id="individual"
                name="user-type"
                value="individual"
              />
                Individual
              </label>
            </div>
            <div>
              <label className="form-input-radio-label cursor-pointer" htmlFor="agency">
              <input
                className="form-input-radio"
                type="radio"
                id="agency"
                name="user-type"
                value="agency"
              />
                Agency
              </label>
            </div>
          </div>
        </div>
        <button className="submit-button cursor-pointer" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
