import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Recovery from "./Recovery";
import CheckOTP from "./CheckOTP";
import ResetPassword from "./ResetPassword";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const XPage_Recovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isOTPValid, setIsOTPValid] = useState(false);

  const handleEmailChange = (event) => {
    let value = event.target.value;
    setEmail(value);
    if (!emailRegex.test(value)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  }

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (!isEmailValid && validEmail) {
      setIsEmailValid(true);
    }
    else {
      setValidEmail(false);
      setEmail("");
    }
  };

  const handleOTPSubmit = (event) => {
    event.preventDefault();
    if (!isOTPValid) {
      setIsOTPValid(true);
    }
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
        closeOnClick: true,
      });
      setNewPassword("");
      setConfirmPassword("");
    } else {
      toast.success("Password reset successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
        closeOnClick: true,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <>
      {!isEmailValid ? (
        <Recovery
          email={email}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleEmailSubmit}
          validEmail={validEmail}
        />
      ) : !isOTPValid ? (
        <CheckOTP
          otp={otp}
          onChangeOTP={setOTP}
          handleSubmit={handleOTPSubmit}
        />
      ) : (
        <>
        <ResetPassword
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          onChangeNewPassword={setNewPassword}
          onChangeConfirmPassword={setConfirmPassword}
          handleSubmit={handlePasswordSubmit}
        />
        <ToastContainer />
        </>
      )}
    </>
  );
};

export default XPage_Recovery;
