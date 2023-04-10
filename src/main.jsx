import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './Pages/CreatePost'
import ReadPosts from './Pages/ReadPosts'
import EditPost from './Pages/EditPost'
import DetailsPlayer from './Components/DetailsPlayer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<App />} />
        <Route index={false} path="/CreatePost" element={<CreatePost />}/> 
        <Route index={false} path="/ReadPosts" element={<ReadPosts />}/> 
        <Route index={false} path="/EditPost/:id/:name?/:position?/:number?/:color?" element={<EditPost />}/> 
        <Route index={false} path="/DetailsPlayer/:id/:name?/:position?/:number?" element={<DetailsPlayer />}/>
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
)

