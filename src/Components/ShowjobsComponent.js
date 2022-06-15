import { useState } from "react";

function ShowjobsComponent(){
    const [jobsarr ,setJobsArr] = useState([]);

    let fetchJobs = async () =>{
        const response = await fetch("http://127.0.0.1:8000/api/jobs/", { headers: {
            Authorization: "Token 5fb215c82451632ae7f0941bf4f1c69ac5dc9890"
        }})
        const data = await response.json()
        const jobs=data.jobs
        setJobsArr(data.jobs)
    }
    
    let job=jobsarr.map((job,index)=>{
        const tags=job.Tags
        const tag = tags.map((tag,index)=>{
            return (
                        <ul>
                            <li>{tag.name}</li>
                        </ul>
                    )
        })
        return(
            
            <div className="card w-25 m-5">
                <h5 className="card-header">{job.name}</h5>
                <div className="card-body">
                    Description :  <p className="card-text">{job.description}</p>
                    <h5 className="card-title">Languages</h5>
                    {tag}
                    <a href="#" className="btn btn-outline-info">Details</a>
                </div>
            </div>     
            ) 
        }
    )
    return(
            <div className="container ">
                <button onClick={fetchJobs}>Fetch</button>
                <h2 className="pt-5">ALL JOBS</h2>
                <div className="row">
                    {job}
                </div>                    
            </div>
    )

}

export default ShowjobsComponent;