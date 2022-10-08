import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useState,useEffect} from 'react'
const Login = () => {
    const [formData,setFormData]=useState({
        email:'',
        password:'',
    })
    const {name,email,password,password2}=formData
    const onChange=(e)=>{
        setFormData(pre=>{
            return{
                ...pre,
                [e.target.id]:e.target.value
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
        <FaSignInAlt/> Login
    </h1>
    <p>please create an account</p>
    </section>
    <section style={{paddingBottom:"100px"} } className="form">
            <form >
                <div className="form-group">

                <input type="email" name="email" id="email" className="form-control" value={email} placeholder='enter your email' onChange={onChange}/>
                <input type="password" name="password" id="password" className="form-control" value={password} placeholder='enter your password' onChange={onChange}/>
                <div className="form-group">
                    <button onSubmit={onSubmit} type='submit' className='btn btn-block' >Submit</button>
                </div>
                </div>
            </form>
    </section>
    </>
    )
}

export default Login