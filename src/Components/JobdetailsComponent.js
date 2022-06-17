import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from "react";

function JobdetailsComponent() {

    const [job, setJob] = useState({});
    const [tags, setTags] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        fetchJob()
    }, [])

    let fetchJob = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/jobs/${id}`, {
            headers: {
                Authorization: "Token 7bc67ec97ef1d68fccd48efb84addf7199f33e0d"
            }
        })
        const data = await response.json()
        setJob(data)
        setTags(data.Tags)
    }

    const renderTags = () => {
        return tags.map((tag) => {
            return (
                <ul key={tag.id}>
                    <li>{tag.name}</li>
                </ul>
            )
        })
    }

    return (

        <div className="home">
            <div className="details">
                <div className="content-detail">
                    <h1>Job Details</h1>
                    <div className="card w-60 m-5">
                        <h2 className="card-header">{job.name}</h2>
                        <div className="card-body">
                            <p className="card-text">{job.description}</p>
                            <h5 className="card-title">Tags</h5>
                            {tags && renderTags()}
                        </div>
                    </div>
                    <div>
                        <NavLink
                            type="button"
                            to={`/jobs`}
                            className="btn btn-outline-warning btn-lg"
                        >
                            Back
                        </NavLink>
                        <button className="btn btn-outline-success m-5 btn-lg">Apply</button>
                    </div>
                </div>
            </div>
            <div className="detail-bg"></div>

        </div>


    )
}
export default JobdetailsComponent;