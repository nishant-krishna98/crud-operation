import React from 'react'
import style from './home.module.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <nav id={style.nav}>
        <article><Link to={"/"}>Create-User</Link></article>
        <article><Link to={"/users"}>Users</Link></article>
      </nav>
    </div>
  )
}
 
export default Home