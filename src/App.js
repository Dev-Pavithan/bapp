import React from 'react'
import BlogNav from './Components/BlogNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Post from './Components/Post'
import Post1 from './Components/Post1'
import Post2 from './Components/Post2'
import Post3 from './Components/Post3'
import Post4 from './Components/Post4'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/bapp'element={<><BlogNav/><Post></Post></>}/>
        <Route path="/post1"  element={<><BlogNav/><Post1></Post1></>}/>
        <Route path="/post2"  element={<><BlogNav/><Post2></Post2></>}/>
        <Route path="/post3"  element={<><BlogNav/><Post3></Post3></>}/>
        <Route path="/post4"  element={<><BlogNav/><Post4></Post4></>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
