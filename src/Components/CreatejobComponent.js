
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import {BsCalendarPlus} from "react-icons/bs"

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
                        <input  type="date" min={new Date()} className="form-control py-2 border-right-0 border" id="creationTimeField"/>
                        <div className="input-group-text bg-transparent"> 
                        <BsCalendarPlus/>
                        </div>
                        <span className="input-group-append ml-n1"></span>
                    </div>
                </div>


                <div className="mb-3">
                    <label for="modifyTimeField" className="form-label md-form md-outline input-with-post-icon datepicker">Modification Time</label><br/>
                    <div className="mb-3 input-group">
                        <input type="date"  min={new Date()} className="form-control py-2 border-right-0 border" id="modifyTimeField" />
                        <div className="input-group-text bg-transparent"> 
                        <BsCalendarPlus/>
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