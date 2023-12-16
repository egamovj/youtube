import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { Btn, Btn1, Btn2, Btn3 } from "../../constants/sidebarBtn";
import { Modal } from "../ModalProvider/Modal";

function SiteBar() {
  const [selectedTitle, setSelectedTitle] = useState("Главная");
  const { left } = useContext(Modal);
  useEffect(() => {});
  return (
    <div>
      <div className={`single-page-wrapper ${left}`}>
        {Btn?.map((item, index) => (
          <Link to={item?.link} key={index}>
            <button
              key={index}
              style={{
                backgroundColor: selectedTitle === item?.title ? "#272727" : "",
              }}
              onClick={() => setSelectedTitle(item?.title)}
              className={`button-menyu1 ${left}`}
            >
              <span>{item?.ico}</span>
              <p>{item?.title}</p>
            </button>
          </Link>
        ))}
        <span className={`button-menyu ${left}`}>
          <hr />
          {Btn1?.map((item, index) => (
            <button
              key={index}
              style={{
                backgroundColor: selectedTitle === item?.title ? "#272727" : "",
              }}
              onClick={() => setSelectedTitle(item?.title)}
            >
              {item?.ico}
              <p>{item?.title}</p>
            </button>
          ))}
          <hr />
          <div>
            <p>Navigator</p>
            {Btn2?.map((item, index) => (
              <button
                key={index}
                style={{
                  backgroundColor:
                    selectedTitle === item?.title ? "#272727" : "",
                }}
                onClick={() => setSelectedTitle(item?.title)}
              >
                {item?.ico}
                <p>{item?.title}</p>
              </button>
            ))}
            <hr />
          </div>
          {Btn3?.map((item, index) => (
            <button
              key={index}
              style={{
                backgroundColor: selectedTitle === item?.title ? "#272727" : "",
              }}
              onClick={() => setSelectedTitle(item?.title)}
            >
              {item?.ico}
              <p>{item?.title}</p>
            </button>
          ))}
          
        </span>
        <div style={{ paddingBottom: "80px" }}></div>
      </div>
    </div>
  );
}

export default SiteBar;
