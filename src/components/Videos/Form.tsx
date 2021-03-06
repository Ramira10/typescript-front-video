import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Video } from "./Video";
// @ts-ignore
import { createVideo, getVideo, updateVideo } from "./VideoService.ts";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Form = () => {
  const [input, setInput] = useState<Video>({
    title: "",
    description: "",
    url: "",
  });
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e: inputChange) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!params.id) {
        await createVideo(input);
        toast.success("New video added");
        navigate("/");
      } else {
        await updateVideo(params.id, input);
        toast.success("Video updated");
        navigate("/");
      }
    } catch (error) {
      if (!input.title || !input.description || !input.url) {
        alert("Check the fields");
      } else {
        alert("Ya existe");
      }
    }
  };

  const loadVideo = async (id: string) => {
    const res = await getVideo(id);
    const { title, description, url } = res.data;
    setInput({ title, description, url });
  };

  useEffect(() => {
    if (params.id) loadVideo(params.id);
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body text-center">
            {params.id ? <h3>Update Video</h3> : <h3>New Video</h3>}
            <form onSubmit={handleSubmit}>
              <div className="form-group pb-4 pt-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Enter title..."
                  className="form-control"
                  autoFocus
                  onChange={handleChange}
                  value={input.title}
                ></input>
              </div>

              <div className="form-group pb-4">
                <input
                  type="url"
                  name="url"
                  placeholder="Enter URL..."
                  className="form-control"
                  onChange={handleChange}
                  value={input.url}
                ></input>
              </div>

              <div className="form-group pb-4">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Enter description..."
                  onChange={handleChange}
                  value={input.description}
                ></textarea>
              </div>
              <div className="text-center">
                {params.id ? (
                  <button className="btn btn-primary">Update Video</button>
                ) : (
                  <button className="btn btn-primary">Create Video</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
