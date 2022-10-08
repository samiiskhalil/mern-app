import React from 'react'
import {FaUser} from 'react-icons/fa'
import {useState,useEffect} from 'react'
const Register = () => {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    const {name,email,password,password2}=formData
    const onChange=(e)=>{
        setFormData(pre=>{
            return{
                ...pre,
                [e.target.name]:e.target.value
            }
        })
    }
   const onSubmit=(e)=>{
        e.preventDefault()
    }
    return (
    <>
    <section className="heading">
        <h1>
        <FaUser/> Register
    </h1>
    <p>please create an account</p>
    </section>
    <section style={{paddingBottom:"100px"} } className="form">
            <form >
                <div className="form-group">

                <input type="text" name="name" id="name" className="form-control" value={name} placeholder='enter your name' onChange={onChange}/>
                <input type="email" name="email" id="email" className="form-control" value={email} placeholder='enter your email' onChange={onChange}/>
                <input type="password" name="password" id="password" className="form-control" value={password} placeholder='enter your password' onChange={onChange}/>
                <input type="password" name="password2" id="password2" className="form-control" value={password2} placeholder='enter your password again' onChange={onChange}/>
                <div className="form-group">
                    <button onSubmit={onSubmit} type='submit' className='btn btn-block' >Submit</button>
                </div>
                </div>
            </form>
    </section>
    </>
    )
}

export default Register