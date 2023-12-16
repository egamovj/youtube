import { useContext } from "react";
import { VideoCard, ChannelCard, Loader } from "../index";
import { Modal } from "../ModalProvider/Modal";
import "./Videos.scss";

function Videos({ videos }) {
  const { left } = useContext(Modal);

  if (!videos?.length) return <Loader />;

  return (
    <div className={`video-wrapper ${left}`}>
      {videos?.map((item) => (
        <div className="video-item" key={item.id.videoId || item.id.channelId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </div>
      ))}
    </div>
  );
}

export default Videos;
