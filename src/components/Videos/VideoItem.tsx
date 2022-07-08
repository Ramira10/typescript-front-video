import React from "react";
import ReactPlayer from "react-player";
import { Video } from "./Video";
import "./VideoItem.css";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import { deleteVideo, getVideos } from "./VideoService.ts";

interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await deleteVideo(id);
    loadVideos();
  };

  return (
    <div className="col-md-4 p-2">
      <div className="card card-body video-card" style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between">
          <h1 onClick={() => navigate(`/update/${video._id}`)}>
            {video.title}
          </h1>
          <span
            className="text-danger"
            onClick={() => video._id && handleDelete(video._id)}
          >
            X
          </span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer width="100%" height="500px" url={video.url} />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
