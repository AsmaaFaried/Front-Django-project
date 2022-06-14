
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

function CreatejobComponent(){
    const optionsArray = [
        { key: "php", label: "PHP" },
        { key: "html", label: "HTML" },
        { key: "css", label: "CSS" },
        { key: "react", label: "REACT" },
        { key: "django", label: "DJANGO" },
        { key: "js", label: "js" },
      ];
    return(
        <div className="job-content">
            
            <div className='w-25 form-card createjobs'>
            <h2 >Job</h2>
            <br/>
            <form>
                <div className="mb-3">
                    <label for="nameField" className="form-label">Title</label>
                    <input type="text" id="nameField" className="form-control" placeholder="Enter job title"/>
                </div>
            
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control"  id="exampleFormControlTextarea1" placeholder="Write more details about this job" rows="5"></textarea>
                </div>

                <div className="mb-3">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select job status</option>
                        <option value="open">Open</option>
                        <option value="Inprogress">Inprogress</option>
                        <option value="finished">Finished</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label for="creationTimeField" className="form-label md-form md-outline input-with-post-icon datepicker">Creation Time</label><br/>
                    <div className="mb-3 input-group">
                        <input className="form-control py-2 border-right-0 border" id="creationTimeField" type="date"/>
                        <div className="input-group-text bg-transparent"> 
                            <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-calendar-plus" viewBox="0 0 16 16">
                            <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                        </div>
                        <span className="input-group-append ml-n1"></span>
                    </div>
                </div>


                <div className="mb-3">
                    <label for="modifyTimeField" className="form-label md-form md-outline input-with-post-icon datepicker">Modification Time</label><br/>
                    <div className="mb-3 input-group">
                        <input className="form-control py-2 border-right-0 border" id="modifyTimeField" type="date"/>
                        <div className="input-group-text bg-transparent"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-plus" viewBox="0 0 16 16">
                            <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                        </div>
                        <span className="input-group-append ml-n1"></span>
                    </div>
                </div>
         
                <div className="mb-3">
                    <label for="tagslist" className="form-label">Tags</label>
                    <DropdownMultiselect options={optionsArray} name="tags" id="tagslist" className="form-control py-2 border-right-0 border" />
                </div>
  
                <button type="submit" className="btn btn-primary">
                    Post Job
                </button>
            </form>
            </div>
            <div className="w-75">
                {/* <img src="../public/images/postjob.jpeg)" alt="image"/> */}
            </div>
        </div>
        
    )
}

export default CreatejobComponent;