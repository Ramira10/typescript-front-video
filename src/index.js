import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import VideoList from './components/Videos/VideoList.tsx';
import Form from './components/Videos/Form.tsx';
import 'bootswatch/dist/lux/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar.tsx';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar></NavBar>

      <div className='container p-4'>

        <Routes>
          <Route exact path='/' element={<VideoList></VideoList>}></Route>
          <Route path='/create-video' element={<Form></Form>}></Route>
          <Route path='/update/:id' element={<Form></Form>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
