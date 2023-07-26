import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
/* import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify"; */
/* import "react-toastify/dist/ReactToastify.css"; */
import { Snackbar, Alert } from "@mui/material";

import Recovery from "./Recovery";
import CheckOTP from "./CheckOTP";
import ResetPassword from "./ResetPassword";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{8,}$/;

const XPage_Recovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isOTPValid, setIsOTPValid] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [validNewPassword, setValidNewPassword] = useState(true);

  const [errorSnackbar, setErrorSnackbar] = useState(false)
  const [errorResetSnackbar, setErrorResetSnackbar] = useState(false)
  const [message, setMessage] = useState("")

  const dispatch = useDispatch();

  const newError = useSelector((state) => state.error);

  useEffect(() => {
    if (newError.status === "no") {
      if (!isEmailValid){
        dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
        setIsEmailValid(true)
      }
      else {
        if (!isOTPValid){
          dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
          setIsOTPValid(true)
        }
        else {
          dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
          navigate("/login");
        }
      }
    }
    if (newError.status === "yes") {
      if (!isEmailValid) {
        setErrorSnackbar(true)
        setEmail("")
        setTimeout(() => {
            setErrorSnackbar(false)
            dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
        }, 5000)
      }
      else {
        if (!isOTPValid){
          setErrorSnackbar(true)
          setOTP("")
          setTimeout(() => {
              setErrorSnackbar(false)
              dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
          }, 5000)
        }
        else {
          setErrorSnackbar(true)
          setNewPassword("")
          setConfirmPassword("")
          setTimeout(() => {
              setErrorSnackbar(false)
              dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
          }, 5000)
        }
      }
    }
  }, [newError]);

  const handleNewPasswordChange = (event) => {
    let value = event.target.value;
    setNewPassword(value);
    if (!passwordRegex.test(value)) {
      setValidNewPassword(false);
    } else {
      setValidNewPassword(true);
    }
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }

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
      dispatch({ type: "saga/emailRecovery", payload: { email }})
    }
    else {
      setValidEmail(false);
      setEmail("");
    }
  };

  const handleOTPSubmit = (event) => {
    event.preventDefault();
    if (!isOTPValid) {
      dispatch({ type: "saga/otpRecovery", payload: { email, otp }})
    }
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (!validNewPassword) {
      setNewPassword("");
      setConfirmPassword("");
    }
    else{
      if (newPassword !== confirmPassword) {
        setMessage("Passwords do not match")
        setErrorResetSnackbar(true)
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setMessage("Password reset successfully")
        setErrorResetSnackbar(true)

        dispatch({ type: "saga/userResetPassword", payload: { newPassword, confirmPassword }})
      }
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
          validNewPassword={validNewPassword}
          /* errorResetSnackbar={errorResetSnackbar}
          message={message}
          setErrorResetSnackbar={setErrorResetSnackbar} */
          handleNewPasswordChange={handleNewPasswordChange}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
          handleSubmit={handlePasswordSubmit}
        />
        {/* <ToastContainer /> */}
        </>
      )}

      <Snackbar
        open={errorSnackbar}
        autoHideDuration={3000}
        onClose={() => setErrorSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert 
          severity="error"
          onClose={() => setErrorSnackbar(false)}
        >
          {newError.message}
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorResetSnackbar}
        autoHideDuration={3000}
        onClose={() => setErrorResetSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert 
          severity="error"
          onClose={() => setErrorResetSnackbar(false)}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default XPage_Recovery;
