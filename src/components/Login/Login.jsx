import { useContext, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { logo } from "../../constants/index";
import { Modal } from "../ModalProvider/Modal";
import { X } from "../../constants/svg";
import "./Login.scss";

function Login() {
  const { setLogin, showmodal, setShowmodal, setUser } = useContext(Modal);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Saqlangan user ma'lumotini olish uchun state
  const [storedUser, setStoredUser] = useState("");
  useEffect(() => {
    // localStorage dan chiqarib  olish
    const userFromStorage = localStorage.getItem("user");
    setStoredUser(userFromStorage);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Input qiymatlarini o'zgartirish va localStorage ga saqlash
    if (name === "user") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const loginn = (e) => {
    e.preventDefault();
    setShowmodal(false);

    localStorage.setItem("login", true);
    const us = localStorage.getItem("login");
    setUser(us);

    // localStorage ga input qiymatlarini saqlash
    localStorage.setItem("user", name.charAt(0));
    setLogin(storedUser);
    window.location.reload();
  };

  return (
    <>
      {showmodal && (
        <div className="div-box">
          <div
            className="login-wrapper"
            onClick={() => setShowmodal(false)}
          ></div>
          <div className="login-wrapper-item">
            <div className="login-x" onClick={() => setShowmodal(false)}>
              <X />
            </div>
            <div className="login-box">{logo}</div>
            <div className="login-box1">
              <form>
                <span>
                  <input
                    type="text"
                    name="user"
                    value={name}
                    onChange={handleInputChange}
                    required
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                    placeholder="Password"
                  />
                  <Button
                    type="submit"
                    onClick={loginn}
                    disabled={!name || !email || !password}
                    className="signin-btn"
                  >
                    SIGN IN
                  </Button>
                </span>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
