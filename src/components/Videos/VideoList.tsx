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
    <div>
      {videos.map((v) => {
        return (
          <div key={v._id}>
            <VideoItem video={v}></VideoItem>
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
