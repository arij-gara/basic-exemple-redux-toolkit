import React from 'react'
import './login.css'
import {Link } from "react-router-dom";
import {useState} from 'react'
import {login, logout} from '../../Store'
import { useDispatch, useSelector } from 'react-redux';
export default function Login() {
  const [newusername,setnewusername] = useState("");
  const username= useSelector ( (state) => state.user.value.username)
  const dispatch = useDispatch();
  return (

    <div>
        <Link to="/">
     <button type='button'>Home</button>
     </Link>
      <h1>Hello this is login page</h1>
      {username}
      <input onChange={(e) => {setnewusername(e.target.value)}}></input>
      <button onClick= {()=> dispatch(login({username:newusername}))} type='button'>Login</button>
      <button onClick= { () =>dispatch(logout())} type='button'> Loging out</button>
    </div>
  )
}
