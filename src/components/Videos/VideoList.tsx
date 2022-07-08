import React, { useEffect, useState } from "react";
import { Video } from "./Video";
// @ts-ignore
import VideoItem from "./VideoItem.tsx";
// @ts-ignore
import { getVideos } from "./VideoService.ts";

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await getVideos();
    setVideos(res.data);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="row">
      {videos.map((v) => {
        return <VideoItem video={v} key={v._id} loadVideos={loadVideos} />;
      })}
    </div>
  );
};

export default VideoList;
