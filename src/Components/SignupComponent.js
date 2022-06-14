
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

function SignupComponent(){
    const optionsArray = [
        { key: "php", label: "PHP" },
        { key: "html", label: "HTML" },
        { key: "css", label: "CSS" },
        { key: "react", label: "REACT" },
        { key: "django", label: "DJANGO" },
        { key: "js", label: "js" },
      ];
    //   $('select').change(function () {
    //     if($(this).val() === 'developer') {
    //         $('tags').show();
    //         $('cv').show();
    //     }
    //     else if($(this).val() === 'company') {
    //         $('tags').hide();
    //         $('cv').hide();
    //         $('address').show();
    //         $('history').show();
    //     }
    // });
    return(
        <div className="signup-content">
            <div className='w-25 form-card signup'>
            <h2 >Sign Up</h2>
            <br/>
            <form action="#">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm password"/>
                </div>
                <div className="mb-3">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                       
                    </select>
                </div>
                
                <div className="mb-3">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select user Type</option>
                        <option value="developer">Developer</option>
                        <option value="company">Company</option>
                    </select>
                </div>
               
                <div className="mb-3">
                    <label for="inputGroupFile01" className="form-label">Upload Your CV</label>
                    <input type="file" className="form-control" id="inputGroupFile01"/>
                </div>
              
                <div className="mb-3">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">History</label>
                    <textarea className="form-control"  id="exampleFormControlTextarea1" rows="3" cols='3'></textarea>
                </div>

                <div className="mb-3">
                    <label for="creationTimeField" className="form-label md-form md-outline input-with-post-icon datepicker">Date of Birth</label><br/>
                    <div className="mb-3 input-group">
                        <input className="form-control py-2 border-right-0 border" id="creationTimeField" type="date"/>
                        <div className="input-group-text bg-transparent bg-white"> 
                            <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-calendar-plus" viewBox="0 0 16 16">
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
                    Register
                </button>
            </form>
            </div>
            
        </div>
        
    )
}

export default SignupComponent;