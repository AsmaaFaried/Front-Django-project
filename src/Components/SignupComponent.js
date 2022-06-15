
import { useState } from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import {BsCalendarPlus} from "react-icons/bs"

function SignupComponent(){
    const optionsArray = [
        { key: "php", label: "PHP" },
        { key: "html", label: "HTML" },
        { key: "css", label: "CSS" },
        { key: "react", label: "REACT" },
        { key: "django", label: "DJANGO" },
        { key: "js", label: "js" },
      ];
      const [value, onChange] = useState(new Date());
      const [selectedDate,setSelectedDate]=useState(null)
    const [showhide, setshowElements] = useState('');
    const handleshowhide=(event)=>{
        const getuserType= event.target.value
        setshowElements(getuserType)
    }
    
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
                    <label for="creationTimeField" className="form-label md-form md-outline input-with-post-icon datepicker">Date of Birth</label><br/>
                    <div className="mb-3 input-group">
                        <input type="date" className="form-control py-2 border-right-0 border" id="creationTimeField" />
                        <div className="input-group-text bg-transparent bg-white"> 
                        <BsCalendarPlus/>
                        </div>
                        <span className="input-group-append ml-n1"></span>
                    </div>
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
                        <option value="">----Select gender----</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                       
                    </select>
                </div>
                
                <div className="mb-3">
                    <select className="form-select" aria-label="Default select example" onChange={(e)=>{handleshowhide(e)}}>
                        <option value="">----Select user Type----</option>
                        <option value="developer">Developer</option>
                        <option value="company">Company</option>
                    </select>
                </div>
               {showhide === 'developer' &&(
                        <div>
                            <div className="mb-3">
                                <label for="tagslist" className="form-label">Tags</label>
                                <DropdownMultiselect options={optionsArray} name="tags" id="tagslist" className="form-control py-2 border-right-0 border" />
                            </div>
                            <div className="mb-3" >
                                <label for="inputGroupFile01" className="form-label">Upload Your CV</label>
                                <input type="file" className="form-control" id="inputGroupFile01"/>
                            </div>
                        </div>
                    )
               }
               {
                showhide === 'company' &&(
                    <div>
                          <div className="mb-3">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">History</label>
                            <textarea className="form-control"  id="exampleFormControlTextarea1" rows="3" cols='3'></textarea>
                        </div>
                    </div>
                )

               }
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
            </div>
            
        </div>
        
    )
}

export default SignupComponent;