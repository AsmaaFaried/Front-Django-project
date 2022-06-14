import { useState } from "react";

function ShowjobsComponent(){
    // const [jobs,setJobs]=useState([])
    const jobs=[

        {
        'name':'front-end task',
        'description':'edit in home page',
        'status':'open',
        'creation_time':'2021-01-11',
        'modification_time':'2021-01-11',
        'tags':['php','html','js']
        },
        {
            'name':'Back-end task',
            'description':'edit in home page',
            'status':'open',
            'creation_time':'2021-01-11',
            'modification_time':'2021-01-11',
            'tags':['php','html','js']
        },
        {
            'name':'front-end task',
            'description':'edit in home page',
            'status':'open',
            'creation_time':'2021-01-11',
            'modification_time':'2021-01-11',
            'tags':['php','html','js']
        },
        {
            'name':'front-end task',
            'description':'edit in home page',
            'status':'open',
            'creation_time':'2021-01-11',
            'modification_time':'2021-01-11',
            'tags':['php','html','js']
            },
            {
                'name':'front-end task',
                'description':'edit in home page',
                'status':'open',
                'creation_time':'2021-01-11',
                'modification_time':'2021-01-11',
                'tags':['php','html','js']
                },
        {
            'name':'Back-end task',
            'description':'edit in home page',
            'status':'open',
            'creation_time':'2021-01-11',
            'modification_time':'2021-01-11',
            'tags':['php','html','js']
        }

    ]

    // const job1={
    //             'name':'front-end task',
    //             'description':'edit in home page',
    //             'status':'open',
    //             'creation_time':'2021-01-11',
    //             'modification_time':'2021-01-11',
    //             'tags':['php','html','js']
    //         }
    // const job2={
    //     'name':'front-end task',
    //     'description':'edit in home page',
    //     'status':'open',
    //     'creation_time':'2021-01-11',
    //     'modification_time':'2021-01-11',
    //     'tags':['php','html','js']
    // }
    // let getAll=()=>{
    
    //     let res=setJobs(job1)
    //     return res

    // }
    let job=jobs.map((job,index)=>{
        let tags=job.tags
        let alltag=tags.map((tag,index)=>{
            return (
                <ul>
                    <li>{tag}</li>
                </ul>
            )
        })
        return(
            
            <div className="card w-25 m-5">
                <h5 className="card-header">{job.name}</h5>
                <div className="card-body">
                    Description :  <p className="card-text">{job.description}</p>
                    <h5 className="card-title">Languages</h5>
                    {alltag}
                    <a href="#" className="btn btn-outline-info">Details</a>

                </div>
            </div>     
            ) 
        }
    )
    return(
            <div className="container ">
                <h2 className="pt-5">ALL JOBS</h2>
                <div className="row">
                    {job}
                </div>
                {/* {getAll()} */}
                    
                
            </div>
    )

}

export default ShowjobsComponent;