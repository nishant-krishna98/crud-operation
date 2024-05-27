import React from 'react'
import style from './home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const EditUser = () => {
  let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
  let obj=useParams()
console.log(obj);
  useEffect(()=>{
    axios.get(`http://localhost:3000/employees/${obj.id}`)
    .then((response)=>{
      setName(response.data.eName)
      setSalary(response.data.eSalary)
      setCompany(response.data.eCompany)
    },[])
    .catch(()=>{console.log("Errorrrrr");})
  },[])
  let nameData=(e)=>{
    setName(e.target.value)
  }
  let salaryData=(f)=>{
    setSalary(f.target.value)
  }
  let companyData=(g)=>{
    setCompany(g.target.value)
  }
  let navigate=useNavigate()
  let formHandle=(e)=>{
    e.preventDefault()
    let payload={
      eName:name,
      eSalary:salary,
      eCompany:company
    }
    axios.put(`http://localhost:3000/employees/${obj.id}`,payload)
    .then(()=>{console.log("Updated");})
    .catch(()=>{console.log("ERRORRRRRRRRR");})
    navigate('/users')
  }
  return (
    <div id={style.myForm}>
        <center>
        <form>
            <h1>EDIT USER</h1>
            <section>
            <label htmlFor="">Name</label><br />
            <input type="text"  value={name}  onChange={nameData}/><br /><br />
            <label htmlFor="">Salary</label><br />
            <input type="number" value={salary}  onChange={salaryData}/><br /><br />
            <label htmlFor="">Company</label><br />
            <input type="text" value={company} onChange={companyData}/><br /><br />
            <button onClick={formHandle}>Submit</button>
            </section>
        </form>
        </center>
        
    </div>
  )
}

export default EditUser