import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Apiservice } from "../../api/api";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import { Loader, Videos } from "../index";
import { CheckCircle, Visibility } from "@mui/icons-material";
import DislikeIcon from '@mui/icons-material/ThumbDown';
import DislikeFilledIcon from '@mui/icons-material/ThumbDownAltOutlined';

import "./VideoDetail.scss";
import { Like, Obuna, Share } from "../../constants/svg";
import { Modal } from "../ModalProvider/Modal";
import { Menyuu } from "../../constants/sidebarBtn";

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVIdeo, setRelatedVideo] = useState([]);
  const { id } = useParams();
  const [post, setPost] = useState(false);
  const initialIsSubscribed = localStorage.getItem("isSubscribed") === "true";
  const [isSubscribed, setIsSubscribed] = useState(initialIsSubscribed);
  const [likeCount, setLikeCount] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [dislikeCount, setDislikeCount] = useState(0);
  const [disliked, setDisliked] = useState(false);
  const { setModal, setModal1, setNumber, setSiteBar, setLeft, setSet } = useContext(Modal);
  useEffect(() => {
    localStorage.setItem("isSubscribed", isSubscribed.toString());
  }, [isSubscribed]);

  const handleButtonClick = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleLikeClick = () => {
    setLikeCount((prevCount) => (prevCount === 0 ? 1 : 0));
    setDisliked(false);
  };

  const handleDislikeClick = () => {
    setDislikeCount((prevCount) => (disliked ? prevCount - 1 : prevCount + 1));
    setDisliked((prevDisliked) => !prevDisliked);
    setLikeCount(0);
  };

  useEffect(() => {
    setNumber(40);
    setSiteBar(<Menyuu />);
    setLeft("activa ");
    setTimeout(() => {
      setSet(4);
    }, 1500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Apiservice.fetching(
          `videos?part=sinppet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);
        const relatedDete = await Apiservice.fetching(
          `search?part=sinppet&relatedToVideoId=${id}`
        );
        setRelatedVideo(relatedDete?.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  if (!videoDetail) {
    return <Loader />;
  }

  const handelmodal = () => {
    setModal("block");
    setModal1("flex");
  };

  const {
    snippet: { title, channelTitle, description, thumbnails },
    statistics: { viewCount },
  } = videoDetail;
  const MAX_LENGTH = 500;
  const shouldShowMoreLink = description?.length > MAX_LENGTH;

  return (
    <div>
      <Box className="video-wrap-clon" mb={10}>
        <Box display={"flex"} className="video-wrap-clon-itme">
          <Box width={"65%"}>
            <ReactPlayer
              url={`https://.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              variant="h5"
              fontWeight={"bold"}
              p={2}
              sx={{ color: "#F1F1F1" }}
            >
              {title}
            </Typography>
            <Box className="videos-like">
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"5px"}
                marginTop={"5px"}
                color={"white"}
                marginLeft={"10px"}
              >
                <Link
                  to={`/channel/${videoDetail?.snippet?.channelId}`}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Avatar
                    alt={channelTitle}
                    src={thumbnails?.default?.url}
                    style={{ marginLeft: "10px" }}
                  />
                  <Typography
                    variant={`subtitle2`}
                    color={"gray"}
                    className="video-avatar"
                    style={{ paddingLeft: "10px" }}
                  >
                    {channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                {isSubscribed ? (
                  // Agar obuna bo'lib qolgan bo'lsa
                  <button className="obuna1" onClick={handleButtonClick}>
                    <Obuna /> Subscribed
                  </button>
                ) : (
                  // Aks holda
                  <button className="obuna" onClick={handleButtonClick}>
                    Subscribe
                  </button>
                )}
              </Stack>
              <Stack
                direction={"row"}
                gap={"20px"}
                alignItems={"center"}
                py={1}
                px={2}
              >
                <Stack
                  sx={{ opacity: ".7" }}
                  direction={"row"}
                  alignItems={"center"}
                  gap={"3px"}
                  color={"white"}
                >
                  <Visibility />
                  {parseInt(viewCount).toLocaleString()}
                </Stack>
                <Box className="box">
                  <button className="box1" onClick={handleLikeClick}>
                    <Stack className="svg">
                      <Like />
                    </Stack>
                    <Stack sx={{ color: "white" }}>
                      {parseInt(likeCount).toLocaleString()}
                    </Stack>
                  </button>
                  <button className="box2" onClick={handleDislikeClick}>
                    <Stack>
                    {disliked ? <DislikeFilledIcon /> : <DislikeIcon />}
                    </Stack>
                  </button>
                </Box>

                <button className="box3" onClick={handelmodal}>
                  <Stack>
                    <Share />
                  </Stack>
                </button>
              </Stack>
            </Box>
            <Box className="dscription">
              <Typography
                variant={`subtitle2`}
                sx={{ opacity: ".8", color: "white" }}
              >
                <span>
                  {post ? description : description?.substring(0, MAX_LENGTH)}
                </span>
                {shouldShowMoreLink && (
                  <span className="span-more" onClick={() => setPost(!post)}>
                    {post ? " less." : " more..."}
                  </span>
                )}
              </Typography>
            </Box>
          </Box>
          <Box width={"30%"} className="video-detail-card">
            <Videos videos={relatedVIdeo} />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default VideoDetail;
