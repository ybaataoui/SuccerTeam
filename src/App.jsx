import { useState, useEffect } from 'react'
import Team from './assets/succer1.png'
import './App.css'

import SideBar from './Components/SideBar'
import { useRoutes } from 'react-router-dom'
import CreatePost from './Pages/CreatePost'
import { supabase } from './client'
import ReadPosts from './Pages/ReadPosts'
import EditPost from './Pages/EditPost'

function App() {

  const [posts, setPosts] = useState([]);
  //console.log(posts)

  useEffect(() => {
      const fetchPost = async () => {
          const {data} = await supabase
              .from('Posts')
              .select()
              .order('created_at', { ascending: true})

              setPosts(data);
      }
      fetchPost().catch(console.error)
  },[])
  
  //Sets up routes
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <ReadPosts/>
  //   },
  //   {
  //     path: "/new",
  //     element: <CreatePost />
  //   },
  //   {
  //     path: "/readPosts",
  //     element: <ReadPosts />
  //   },
  //   {
  //     path: "/edit/:id",
  //     element: <EditPost data={posts} />
  //   }
  // ]);

  return (
    <div className="App">
      <SideBar />
      <div className='body'>
          <h1>Welcome to the Teamates Creator!</h1>
          <br />
          <h3>Here is where you can create your own succer team before start the game against your friend!</h3>
          <img src={Team} alt="" />
      </div> 
    </div>
  )
}

export default App
