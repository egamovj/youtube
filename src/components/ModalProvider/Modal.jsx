import React, { useEffect, useState } from "react";
import { Menyu } from "../../constants/sidebarBtn";
export const Modal = React.createContext();

function ModalProvider({ children }) {

  const storedUser = localStorage.getItem("user") || "";
  const us = localStorage.getItem("login") || "";
  const [modal, setModal] = useState("none");
  const [modal1, setModal1] = useState("none");
  const [number, setNumber] = useState(40);
  const [left, setLeft] = useState("");
  const [set, setSet] = useState("");
  const [siteBar, setSiteBar] = useState(<Menyu />);
  const [login, setLogin] = useState(storedUser);
  const [showmodal, setShowmodal] = useState(false);
  const [user, setUser] = useState(us);
  useEffect(() => {
    localStorage.setItem("login", user);
    localStorage.setItem("user", login);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);

  return (
    <div>
      <Modal.Provider
        value={{
          modal,
          setModal,
          setModal1,
          modal1,
          number,
          setNumber,
          left,
          setLeft,
          siteBar,
          setSiteBar,
          login,
          setLogin,
          showmodal,
          setShowmodal,
          user,
          setUser,
          set,
          setSet,
        }}
      >
        {children}
      </Modal.Provider>
    </div>
  );
}

export default ModalProvider;
