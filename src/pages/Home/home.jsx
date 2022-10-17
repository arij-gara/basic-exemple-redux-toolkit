import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,Link
  } from "react-router-dom";

  import { useSelector } from 'react-redux';
export default function Home() {
 const username= useSelector ( (state) => state.user.value.username)
  return (

    <div>
        
        <Link to='/login'>
        <button type='button'>Login</button>
        </Link>
      <h1>Hello this is home page</h1>
      <p> Hello {username}</p>

    </div>
  )
}
