import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Read() {
    const [data, setData] = useState([]);
    const [tabledark, setTaleDark] = useState("")

    function getData(){
        axios.get("https://64057195eed195a99f82dc2a.mockapi.io/reactcurd")
        .then((res) =>{
            console.log(res.data);
            setData(res.data);
        })
    }
    function handleDelete (id) {
        axios.delete(`https://64057195eed195a99f82dc2a.mockapi.io/reactcurd/${id}`).then(() =>{
            getData()
        })
    }
    useEffect(() => {
        getData();
    }, [])
    
    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id" , id);
        localStorage.setItem("name" , name);
        localStorage.setItem("email" , email);
    }
    
    return (
        <>
        <div class="form-check form-switch">
            <input className="form-check-input" onClick={() =>{
                if(tabledark === "table-dark")
                    setTaleDark("")
                else
                    setTaleDark("table-dark")
            }} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
        <div className="d-flex m-3 justify-content-between">
            <h2>Read Operation</h2>
            <Link to="/">
                <button className='btn btn-primary'>Create Data</button>
            </Link>
        </div>
        <table className={`table ${tabledark}`}>
            <thead>
                <tr>
                    <th scope="col">Serial No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>{
                data.map((eachData) =>{
                    return(
                        <>
                        <tbody>
                            <tr>
                                <th scope="row">{eachData.id}</th>
                                <td>{eachData.name}</td>
                                <td>{eachData.email}</td>
                                <td> 
                                    <Link to="/Update">
                                        <i className="fa-regular fa-pen-to-square icon-edit" onClick={() => setToLocalStorage(
                                            eachData.id,
                                            eachData.name,
                                            eachData.email
                                        )}></i>
                                    </Link>
                                </td>
                                <td><i className="fa-regular fa-trash-can icon-delete" onClick={() =>{handleDelete(eachData.id)}}></i></td>
                            </tr>
                        </tbody>
                        </>
                    )
                })
            }
            
        </table>
        </>
    )
}
