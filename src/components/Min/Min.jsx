import { useContext, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { Category, Videos } from "../index";
import { Apiservice } from "../../api/api";

import './MIn.scss'
import { Modal } from "../ModalProvider/Modal";
import { Menyu } from "../../constants/sidebarBtn";

function Min() {
  const [selectCategory, setSelectCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const { left, setLeft, setSiteBar, setSet } = useContext(Modal);
  const selectedCategoryHander = (category) => setSelectCategory(category);
  useEffect(() => {
    setLeft("");
    setSiteBar(<Menyu />);
    setSet(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const getData = async () => {
      const data = await Apiservice.fetching(
        `search?part=snippet&q=${selectCategory}`
      );
      setVideos(data.items);
      // Apiservice.fetching("search").then((data) => setVideos(data));
    };
    getData(getData);
  }, [selectCategory]);

  return (
    <Stack className="min-page">
      <div className={`sigle-page-min ${left}`}></div>
      <div className={`hom-min-page ${left}`}>
        <div className="wrapper-min">
          <div className="category">
            <Category
              selectedCategoryHander={selectedCategoryHander}
              selectCategory={selectCategory}
            />
          </div>
          <Videos videos={videos} />
        </div>
      </div>
    </Stack>
  );
}

export default Min;
