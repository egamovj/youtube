import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Apiservice } from "../../api/api";
import ChanelCard from "../ChannelCard/ChannelCard";
import { Videos } from "../index";
import { Modal } from "../ModalProvider/Modal";
import { Menyu } from "../../constants/sidebarBtn";
import "./Channel.scss";

function Chanel() {
  const [chanelDetail, setchanelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const [dis, setDis] = useState();
  const { id } = useParams();
  const { left, setLeft, setSiteBar, setSet } = useContext(Modal);
  // console.log(chanelDetail);
  useEffect(() => {
    setLeft("");
    setSiteBar(<Menyu />);
    setSet(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Apiservice.fetching(
          `channels?part=snippet&id=${id}`
        );
        setDis(data?.items[0]);
        setchanelDetail(data?.items[0]);
        const dataVideo = await Apiservice.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setVideos(dataVideo?.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  let d = dis?.snippet?.description.split(/[.!?]/)[0];
  let a = d + /[.!?]/.exec(dis?.snippet?.description)?.[0];

  return (
    <div>
      <div className="wrapper-banner">
        <div className={`banner-left ${left}`}></div>
        <div
          className="banner"
          style={{
            backgroundImage: `url(${chanelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
          }}
        ></div>
      </div>
      <div className="chanel-video-wrapper">
        <div className="chanel-item-wrapper">
          <div className={`chanel-item-left ${left}`}></div>
          <div className={`chanel-item-video ${left}`}>
            <div className="autar">
              <div className="autar-item">
                <span className="chanel-card-item">
                  <ChanelCard video={chanelDetail} />
                </span>
                <div>
                  <p className="chanel-t"> {chanelDetail?.snippet?.title}</p>
                  <p className="chanel-t1">
                    <p> {a}</p>
                  </p>
                </div>
              </div>
            </div>
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chanel;
