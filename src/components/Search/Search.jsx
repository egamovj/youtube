import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Apiservice } from "../../api/api";
import { Box } from "@mui/material";
import { Videos } from "../index";
import { Modal } from "../ModalProvider/Modal";
import { Menyu } from "../../constants/sidebarBtn";
import "./Search.scss";

function Search() {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const { setNumber, setLeft, setSiteBar, setSet } = useContext(Modal);
  useEffect(() => {
    setNumber(80);
    setLeft("");
    setSiteBar(<Menyu />);
    setSet(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Apiservice.fetching(`search?part=snippet&q=${id}`);
        console.log(data);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box p={2} sx={{ height: "10vh" }}>
      <Box className="search-wrapper">
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default Search;
