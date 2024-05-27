import React from 'react'
import { useState } from 'react'
import style from './home.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let navigate=useNavigate()
    
    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let salaryData=(f)=>{
        f.preventDefault()
        setSalary(f.target.value)
    }
    let companyData=(g)=>{
        g.preventDefault()
        setCompany(g.target.value)
    }
    let formHandle=(g)=>{
        g.preventDefault()
        // let payload=

        axios.post("http://localhost:3000/employees",{
            eName:name,
            eSalary:salary,
            eCompany:company
        })
        .then(()=>{
            console.log("Data has been stored")  
        })
        .catch(()=>{console.log("Errorrrr");})
        navigate('/users')
        
    }
   
  return (
    <div id={style.myForm}>
        <center>
        <form>
            <h1>CREATE USER</h1>
            <section>
            <label htmlFor="">Name</label><br />
            <input type="text" value={name} onChange={nameData} /><br /><br />
            <label htmlFor="">Salary</label><br />
            <input type="number" value={salary} onChange={salaryData}/><br /><br />
            <label htmlFor="">Company</label><br />
            <input type="text" value={company} onChange={companyData}/><br /><br />
            <button onClick={formHandle}>Submit</button>
            </section>
        </form>
        </center>
        
    </div>
  )
}

export default CreateUser