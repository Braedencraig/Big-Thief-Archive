"use client";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default function VideoBlock({ id }: { id: string }) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "195",
    width: "320",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={id} opts={opts} onReady={onPlayerReady} />;
}
