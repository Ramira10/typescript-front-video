import React, { ChangeEvent, FormEvent, useState } from "react";
import { Video } from "./Video";
// @ts-ignore
import {createVideo} from "./VideoService.ts"
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom"

type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Form = () => {
  const [input, setInput] = useState<Video>({
    title: "",
    description: "",
    url: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: inputChange) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await createVideo(input);
      toast.success('New video added')
      navigate('/') 
    } catch (error) {
      if(!input.title || !input.description || !input.url) {
        alert('Check the fields')
      } else {
        alert('Ya existe')
      }
      
    }

  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body text-center">
            <h3>New Video</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group pb-4 pt-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Enter title..."
                  className="form-control"
                  autoFocus
                  onChange={handleChange}
                ></input>
              </div>

              <div className="form-group pb-4">
                <input
                  type="url"
                  name="url"
                  placeholder="Enter URL..."
                  className="form-control"
                  onChange={handleChange}
                ></input>
              </div>

              <div className="form-group pb-4">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Enter description..."
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="text-center">
              <button className="btn btn-primary">Create Video</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
