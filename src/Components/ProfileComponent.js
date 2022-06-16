import { BsCalendarPlus } from "react-icons/bs";

function ProfileComponent(){

    return(
        <div className="home">
            <div className="st">
                <div className="content-profile">
                    <h1>Profile</h1><br/>
                    <form action="#">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email" value="Asmaa@gmail.com" disabled/>
                        </div>
                    
                        <div className="mb-3">
                            <label for="creationTimeField" className="form-label md-form md-outline input-with-post-icon datepicker">Date of Birth</label><br/>
                            <div className="mb-3 input-group">
                                <input type="date" className="form-control py-2 border-right-0 border" id="creationTimeField" value={new Date} disabled/>
                                <div className="input-group-text bg-transparent bg-white"> 
                                <BsCalendarPlus/>
                                </div>
                                <span className="input-group-append ml-n1"></span>
                            </div>
                        </div>
                    
                    {/* {showhide === 'developer' &&(
                                <div>
                                    <div className="mb-3">
                                        <select className="form-select" aria-label="Default select example">
                                            <option value="">----Select gender----</option>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                        
                                        </select>
                                    </div>
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

                    } */}
                             <button className="btn btn-outline-primary m-5 btn-lg">Edit</button>
                        </form>
                        <div>
                       
                    </div>
                </div>
            </div>
            <div className="snd-profile"></div>

        </div>
       

    )
}
export default ProfileComponent;