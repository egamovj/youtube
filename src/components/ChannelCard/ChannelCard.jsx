import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import "./ChannelCard.scss";

function ChannelCard({ video }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "0",
        display: "flex",
        alignItems: "center",
        height: "326px",
        margin: "auto",
      }}
    >
      <Link
        to={`/channel/${
          video?.id?.channelId ? video?.id?.channelId : video?.id
        }`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={video?.snippet?.thumbnails?.high?.url}
            alt={video?.snippet?.title}
            className="cannel-card"
          />
          <Typography variant={`h6`} color={"white"}>
            {video?.snippet?.title}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </Typography>
          {video?.statistics?.subsrciberCount && (
            <Typography>
              {parseInt(video?.statistics?.subsrciberCount)?.toLocaleString(
                "en-US"
              )}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
