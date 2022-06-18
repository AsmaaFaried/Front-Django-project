import { useState, useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom'

function ShowFinishedJobs() {
    let navigate = useNavigate()
    let token = localStorage.getItem("token")
    const [jobsarr, setJobsArr] = useState([]);

    useEffect(() => {
        fetchJobs()
    }, [])

    let fetchJobs = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/v1/account/get_all_finished_jobs", {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        const data = await response.json()
        console.log(data.jobs)
        setJobsArr(data.jobs)

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

export default ShowFinishedJobs;