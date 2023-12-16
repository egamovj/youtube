import {
    FitnessCenterRounded,
    Home,
    ReceiptLong,
    Restore,
    Settings,
    SlowMotionVideo,
    Menu,
  } from "@mui/icons-material";
  import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
  import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
  import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
  import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
  import WhatshotIcon from "@mui/icons-material/Whatshot";
  import MusicNoteIcon from "@mui/icons-material/MusicNote";
  import SensorsIcon from "@mui/icons-material/Sensors";
  import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
  import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
  import FlagIcon from "@mui/icons-material/Flag";
  import AnnouncementIcon from "@mui/icons-material/Announcement";
  import ReportProblemIcon from "@mui/icons-material/ReportProblem";
  import { useContext } from "react";
  import { Modal } from "../components/ModalProvider/Modal";
  // eslint-disable-next-line react-refresh/only-export-components
  export const Btn = [
    {
      ico: <Home />,
      title: "Home",
      link: "/",
    },
    {
      ico: <SlowMotionVideo />,
      title: " Shorts",
    },
    {
      ico: <SubscriptionsIcon />,
      title: " Subscriptions",
    },
  ];
  // eslint-disable-next-line react-refresh/only-export-components
  export const Btn1 = [
    {
      ico: <VideoLibraryIcon />,
      title: " Library",
    },
    {
      ico: <Restore />,
      title: " History",
    },
    {
      ico: <OndemandVideoIcon />,
      title: " Watch later",
    },
    {
      ico: <ThumbUpOffAltIcon />,
      title: " Liked videos",
    },
  ];
  
  // eslint-disable-next-line react-refresh/only-export-components
  export const Btn2 = [
    {
      ico: <WhatshotIcon />,
      title: " Trending",
    },
    {
      ico: <MusicNoteIcon />,
      title: " Music",
    },
    {
      ico: <SensorsIcon />,
      title: " Live",
    },
    {
      ico: <VideogameAssetIcon />,
      title: " Games",
    },
    {
      ico: <ReceiptLong />,
      title: " News",
    },
    {
      ico: <FitnessCenterRounded />,
      title: " Sport",
    },
    {
      ico: <ManageHistoryIcon />,
      title: " Education",
    },
  ];
  
  // eslint-disable-next-line react-refresh/only-export-components
  export const Btn3 = [
    {
      ico: <Settings />,
      title: " Settings",
    },
    {
      ico: <FlagIcon />,
      title: " Complaints",
    },
    {
      ico: <ReportProblemIcon />,
      title: " Reference",
    },
    {
      ico: <AnnouncementIcon />,
      title: " Post a review",
    },
  ];
  
  export const Menyu = () => {
    const { left, setLeft } = useContext(Modal);
    const menyu = () => {
      if (left === "") {
        setLeft("active");
      } else {
        setLeft(!left ? left : "");
      }
    };
  
    return (
      <span onClick={menyu} className="menu-active">
        <Menu />
      </span>
    );
  };
  export const Menyuu = () => {
    const { left, setLeft } = useContext(Modal);
    const menyu = () => {
      if (left === "") {
        setLeft("activa");
      } else {
        setLeft(!left ? left : "");
      }
    };
    return (
      <span onClick={menyu} className="menu-active">
        <Menu />
      </span>
    );
  };
  