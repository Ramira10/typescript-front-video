import axios from "axios";
import { Video } from "./Video";

const API = "https://typescript-back-videos.herokuapp.com"

export const getVideos = async () => {
    return await axios.get(`${API}/videos`);
}

export const createVideo = async (video: Video) => {
    return await axios.post(`${API}/videos`, video);
}