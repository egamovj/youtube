import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import { logo } from "../../constants/index";
import { colors } from "../../constants/colors";
import SearchBar from "../SearchBar/SearchBar";
import { MicRounded, VideoCall } from "@mui/icons-material";
import { Obuna, X } from "../../constants/svg";
import SiteBar from "../Sidebar/Sidebar";
import { Modal } from "../ModalProvider/Modal";
import { Menyu } from "../../constants/sidebarBtn";
import Login from "../Login/Login";
import { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [logoutWra, setLogoutWra] = useState();
  const {
    left,
    setSiteBar,
    setNumber,
    siteBar,
    setLeft,
    login,
    setShowmodal,
    user,
    set,
    setSet,
    setUser,
    setLogin,
  } = useContext(Modal);

  useEffect(() => {
    setNumber("40");
    setSiteBar(<Menyu />);
    setLeft("");
    setSet(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const show = () => {
    setShowmodal(true);
  };

  const logout = () => {
    setLogoutWra("active");
  };
  const Logout = () => {
    setLogoutWra("");
    setUser("");
    setLogin("");
  };
  return (
    <nav>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={"2"}
        sx={{
          position: "sticky",
          top: "0",
          zIndex: 999,
          background: `${colors?.nav}`,
          height: "60px",
        }}
        className="nav"
      >
        <div className="menu-nav">
          {siteBar}
          <Link to={"/"} className="logo">
            {logo}
          </Link>
        </div>
        <Box className="serch-icon">
          <SearchBar />
          <span className="span">
            <MicRounded />
          </span>
        </Box>
        <Box className="nav-icon-right">
          <span className={`span ${user}`}>
            <VideoCall />
          </span>
          <span className={`span ${user}`}>
            <Obuna />
          </span>
          <Button className={`sigin ${user}`} onClick={show}>
            SIGN IN
          </Button>
          <span className={`usera ${user}`} onClick={logout}>
            {login}
          </span>
          <Login />
          <div className={`logout-w ${logoutWra}`}>
            <span className="X-w" onClick={() => setLogoutWra("")}>
              <X />
            </span>
            <Button className={`logout ${logoutWra}`} onClick={Logout}>
              {" "}
              LOG OUT
            </Button>
          </div>
        </Box>
      </Stack>
      <div className={`nav-item ${left}`} style={{ transition: `.${set}s` }}>
        <div className={`sigle-page-min-item ${left}`}>
          <SiteBar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
