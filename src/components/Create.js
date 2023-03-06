import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom';
export default function Create() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const header = {"Access-Control-Allow-origin": "*"};

    const history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(
            'https://64057195eed195a99f82dc2a.mockapi.io/reactcurd',
            {name : name,
            email : email,
            header,
        }).then(() => {
            history("/read");
        });
    };

    return (
        <>
            <div className="d-flex my-3 justify-content-between">
                <h2>Create operation</h2>
                <Link to="/read">
                <button className='btn btn-primary'>Show Data</button>
                </Link>
            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder='Enter Your Name...' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder='Enter Your Email Address...' aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}
