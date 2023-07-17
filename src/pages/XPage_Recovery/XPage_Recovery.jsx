import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Recovery from "./Recovery";
import CheckOTP from "./CheckOTP";
import ResetPassword from "./ResetPassword";

const XPage_Recovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isOTPValid, setIsOTPValid] = useState(false);

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (!isEmailValid) {
      setIsEmailValid(true);
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
      alert("Passwords do not match");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      alert("Password reset successful");
      navigate("/login");
    }
  };

  return (
    <>
      {!isEmailValid ? (
        <Recovery
          email={email}
          onChangeEmail={setEmail}
          handleSubmit={handleEmailSubmit}
        />
      ) : !isOTPValid ? (
        <CheckOTP
          otp={otp}
          onChangeOTP={setOTP}
          handleSubmit={handleOTPSubmit}
        />
      ) : (
        <ResetPassword
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          onChangeNewPassword={setNewPassword}
          onChangeConfirmPassword={setConfirmPassword}
          handleSubmit={handlePasswordSubmit}
        />
      )}
    </>
  );
};

export default XPage_Recovery;
