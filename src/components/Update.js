import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function Update() {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
    },[])

    
    const handleUpdate = (e) => {
        console.log("hiii")
        e.preventDefault();
        axios.put(`https://64057195eed195a99f82dc2a.mockapi.io/reactcurd/${id}`,
        {
            name: name,
            email: email,
        }).then(()=>{
            navigate("/read")
        })
    };
    
    return (
        <>
        <h2 className='my-3'>Update Operation</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} placeholder='Enter Your Name...' onChange={(e) => setName(e.target.value)} /> 
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} placeholder='Enter Your Email Address...' aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleUpdate} >Update</button>
                <Link to="/read">
                    <button className="btn btn-primary mx-3">Back</button>
                </Link>
            </form>
        </>
    )
}
