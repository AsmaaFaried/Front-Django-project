import { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'

function ProfileComponent(){
    const [userdata,setUserData] = useState([]);
    let navigate = useNavigate()
    let token = localStorage.getItem("token")
    useEffect(() => {
        fetchUserData()
    }, [])
    let fetchUserData = async () => {
        console.log(token)
        const response = await fetch(`http://127.0.0.1:8000/api/v1/account/user_details/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        const data = await response.json()
        setUserData(data)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/v1/account/update/", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`
                },
                body: JSON.stringify({
                    username: userdata.username,
                    email: userdata.email,
                }),
            });
            let resJson = await res.json();
            navigate('../profile/', { replace: true })
        } catch (err) {
            console.log(err);
        }
    };

    return(
        <div className="home">
            <div className="st">
                <div className="content-profile">
                    <h1>Profile</h1><br/>
                    <form action="#">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" value={userdata.username} onChange={(e) => setUserData({username:e.target.value, email:userdata.email})} className="form-control" id="exampleInputEmail1" placeholder="Enter your name" />
                    </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={userdata.email} onChange={(e) => setUserData({username:userdata.userdata, email:e.target.value,})} className="form-control" id="exampleInputEmail1" placeholder="Enter your email" />
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
                             <button className="btn btn-outline-primary m-5 btn-lg" onClick={handleSubmit}>Edit</button>
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