"use client";
import YouTube from "react-youtube";

interface Props {
  id: string;
}

const YouTubeVideo = ({ id }: Props) => {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="fullscreen-video">
      <YouTube videoId={id} opts={opts} />;
    </div>
  );
};

export default YouTubeVideo;
