import React from 'react'
import style from './home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const Users = () => {
let [content, setContent]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/employees")
    .then((response)=>{setContent(response.data)})
    .catch(()=>{console.log("Errorrrr");})
  },[])
  let deleteUser=(x)=>{
axios.delete(`http://localhost:3000/employees/${x}`)
window.location.assign("/users")
  }
  
  return(
    <div id={style.userHome}>
      {content.map((x)=>{
        return(
          <table>
          <th colSpan="2">Employee: {x.id}</th>
          <tr>
            <td>Name:</td>
            <td>{x.eName}</td>
          </tr>
          <tr>
            <td>Salary:</td>
            <td>{x.eSalary}</td>
          </tr>
          <tr>
            <td>Company:</td>
            <td>{x.eCompany}</td>
          </tr>
          <tr>
            <td><button><Link to={`/edit/${x.id}`}>edit</Link></button></td>
            <td><button onClick={()=>{deleteUser(x.id)}}>Delete</button></td>
          </tr>
        </table>
        )
      })}
    </div>
  )
}

export default Users