import { useState, useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom'

function ShowjobsComponent() {
    let navigate = useNavigate()
    let token = localStorage.getItem("token")
    const [jobsarr, setJobsArr] = useState([]);

    useEffect(() => {
        fetchJobs()
    }, [])

    let fetchJobs = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/v1/job", {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        const data = await response.json()
        console.log(data.jobs)
        setJobsArr(data.jobs)

    }
    let handleApply = async (id) =>{
        const response = await fetch(`http://127.0.0.1:8000/api/v1/job/${id}/apply`, {
            headers: {
                Authorization:`Token ${token}`
            }
        })
        const data = await response.json()
        console.log(data)
        if(response.status === 200){
            alert("Applied Successfully")
        }else{
            alert("Denied")
        }

    }
    
    let job = jobsarr.map((job, index) => {
        const tags = job.tags
        const tag = tags.map((tag, index) => {
            return (
                <ul>
                    <li>{tag.name}</li>
                </ul>
            )
        })
        console.log(job)
        return (

            <div className="card w-25 m-5">
                <h5 className="card-header">{job.name}</h5>
                <div className="card-body">
                    Description :  <p className="card-text">{job.description}</p>
                    <h5 className="card-title">Languages</h5>
                    {tag}
                    <NavLink
                        to={`/jobs/${job.id}`}
                        className="btn btn-outline-info"
                    >
                        Details
                    </NavLink>
                    <button className="btn btn-outline-success m-2" onClick={()=> { handleApply(job.id) }}>Apply</button>
                </div>
            </div>
        )
    }
    )

   

    return (
        <div className="container ">
            <h2 className="pt-5">ALL JOBS</h2>
            <div className="row">
                {job}
            </div>
        </div>
    )

}

export default ShowjobsComponent;