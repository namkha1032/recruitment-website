import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
/* import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify"; */
/* import "react-toastify/dist/ReactToastify.css"; */
import { Snackbar, Alert } from "@mui/material";

import Recovery from "./Recovery";
//import CheckOTP from "./CheckOTP";
import ResetPassword from "./ResetPassword";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const otpRegex = /^\d{6}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/;

const XPage_Recovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [validOTP, setValidOTP] = useState(true);
  const [validNewPassword, setValidNewPassword] = useState(true);
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);

  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const [errorResetSnackbar, setErrorResetSnackbar] = useState(false);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();

  const newError = useSelector((state) => state.error);

  const handleClickHome = () => {
    dispatch({
      type: "error/setError",
      payload: { status: "idle", message: "" },
    });
    navigate("/home");
  };

  useEffect(() => {
    if (newError.status === "no") {
      if (!isEmailValid) {
        setLoading(false)
        dispatch({
          type: "error/setError",
          payload: { status: "idle", message: "" },
        });
        setIsEmailValid(true);
      } else {
        setLoading(false)
        dispatch({
          type: "error/setError",
          payload: { status: "idle", message: "" },
        });
        navigate("/login");
      }
    }
    if (newError.status === "yes") {
      if (!isEmailValid) {
        setLoading(false)
        setErrorSnackbar(true);
        //setEmail("");
        setTimeout(() => {
          setErrorSnackbar(false);
          dispatch({
            type: "error/setError",
            payload: { status: "idle", message: "" },
          });
        }, 5000);
      } else {
        setLoading(false)
        setErrorSnackbar(true);
        //setOTP("");
        //setNewPassword("");
        //setConfirmPassword("");
        setTimeout(() => {
          setErrorSnackbar(false);
          dispatch({
            type: "error/setError",
            payload: { status: "idle", message: "" },
          });
        }, 5000);
      }
    }
  }, [newError]);

  const handleChangeOTP = (event) => {
    let value = event.target.value;
    setOTP(value);
    if (!otpRegex.test(value)) {
      setValidOTP(false);
    } else {
      setValidOTP(true);
    }
  };

  const handleNewPasswordChange = (event) => {
    let value = event.target.value;
    setNewPassword(value);
    if (!passwordRegex.test(value)) {
      setValidNewPassword(false);
    } else {
      setValidNewPassword(true);
    }
  };

  const handleConfirmPasswordChange = (event) => {
    let value = event.target.value
    setConfirmPassword(value)
    if (value === "") {
      setValidConfirmPassword(false);
    } else {
      setValidConfirmPassword(true);
    }
  };

  const handleEmailChange = (event) => {
    let value = event.target.value;
    setEmail(value);
    if (!emailRegex.test(value)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (!isEmailValid && validEmail && email != "") {
      setLoading(true)
      dispatch({ type: "saga/emailRecovery", payload: { email } });
    } else {
      setValidEmail(false);
      setEmail("");
    }
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if(validOTP && validNewPassword && validConfirmPassword && otp != "" && newPassword != "" && confirmPassword != "") {
      if (newPassword !== confirmPassword) {
        setMessage("Passwords do not match");
        setErrorResetSnackbar(true);
        setConfirmPassword("");
      } else {
        setLoading(true)
        dispatch({
          type: "saga/userResetPassword",
          payload: { email, otp, newPassword },
        });
      }
      
    } else {
      if (!validOTP || otp == "") {
        setValidOTP(false)
        //setOTP("");
      }
      if (!validNewPassword || newPassword == "") {
        setValidNewPassword(false)
        //setNewPassword("");
      }
      if (!validConfirmPassword || confirmPassword == "") {
        setValidConfirmPassword(false)
        //setConfirmPassword("");
      }
    }


    // if (!validNewPassword || newPassword == "" || confirmPassword == "") {
    //   setNewPassword("");
    //   setConfirmPassword("");
    // } else {
    //   if (newPassword !== confirmPassword) {
    //     setMessage("Passwords do not match");
    //     setErrorResetSnackbar(true);
    //     //setNewPassword("");
    //     setConfirmPassword("");
    //   } else {
    //     dispatch({
    //       type: "saga/userResetPassword",
    //       payload: { email, otp, newPassword },
    //     });
    //   }
    // }
  };

  return (
    <>
      {!isEmailValid ? (
        <Recovery
          email={email}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleEmailSubmit}
          validEmail={validEmail}
          loading={loading}
          handleClickHome={handleClickHome}
        />
      ) : (
        <>
          <ResetPassword
            otp={otp}
            handleChangeOTP={handleChangeOTP}
            newPassword={newPassword}
            confirmPassword={confirmPassword}
            validOTP={validOTP}
            validNewPassword={validNewPassword}
            validConfirmPassword={validConfirmPassword}
            handleNewPasswordChange={handleNewPasswordChange}
            handleConfirmPasswordChange={handleConfirmPasswordChange}
            handleSubmit={handlePasswordSubmit}
            loading={loading}
            handleClickHome={handleClickHome}
          />
        </>
      )}

      <Snackbar
        open={errorSnackbar}
        autoHideDuration={5000}
        onClose={() => setErrorSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" onClose={() => setErrorSnackbar(false)}>
          {!isEmailValid ? "Email not found" : "OTP is incorrect"}
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorResetSnackbar}
        autoHideDuration={5000}
        onClose={() => setErrorResetSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" onClose={() => setErrorResetSnackbar(false)}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default XPage_Recovery;
