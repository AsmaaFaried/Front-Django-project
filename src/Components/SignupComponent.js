import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from "react";
import Multiselect from 'multiselect-react-dropdown';

function SignupComponent() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmPass] = useState("");
    const [usertype, setUsertype] = useState("");
    const [gender, setGender] = useState("");
    const [cv, setCv] = useState("");
    const [address, setAddress] = useState("");
    const [history, setHistory] = useState("");
    const [showhide, setshowElements] = useState('');
    const [Tags, setTag] = useState([]);
    const [selectedTags, setSelectedTags] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        fetchTags()
    }, [])

    const handleshowhide = (event) => {
        const getuserType = event.target.value
        setshowElements(getuserType)
    }
    
    let onSelect = (selectedList, selectedItem) => {
        setSelectedTags(previous => [...previous, selectedItem])
    }
    let onRemove = (selectedList, removedItem) => {
        setSelectedTags(previous => {
            const old = [...previous];
            old.splice(removedItem);
            return old;
        })
    }

    let fetchTags = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/tags/", {
            headers: {
                Authorization: "Token 7bc67ec97ef1d68fccd48efb84addf7199f33e0d"
            }
        })
        const data = await response.json()
        let keys = []
        data.tags.forEach((tag) => {
            keys.push({ key: `${tag.id}`, label: tag.name, value: tag.id })
        })
        setTag(keys)
    }

    let handleSignUpUser = async (e) => {
        e.preventDefault();
        try {
            console.log("waslanaaa")
            let res = await fetch("http://127.0.0.1:8000/api/v1/account/signupUser/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email:email,
                    user_type:usertype,
                    password: password,
                    password_confirm:confirmpass,
                    gender:gender
                }),
            });
            let resJson = await res.json();
            console.log(resJson)
            if (res.status === 201) {
                setUsername("");
                setPassword("");
                setEmail("");
                setUsertype("");
                setConfirmPass("");
                setGender("");
                setSelectedTags([]);
                setDate("")
                navigate('../login/', { replace: true })
            }
        } catch (err) {
            console.log(err);
        }
    };

    let handleSignUpCompany = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/v1/account/signupCompany/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email:email,
                    user_type:usertype,
                    password: password,
                    address:address,
                    history:history
                }),
            });
            let resJson = await res.json();
            console.log(resJson)
            if (res.status === 201) {
                setUsername("");
                setPassword("");
                setConfirmPass("");
                setDate("");
                setEmail("");
                setUsertype("");
                setAddress("");
                setHistory("");
                navigate('../login/', { replace: true })
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="signup-content">
            <div className='w-25 form-card signup'>
                <h2 >Sign Up</h2>
                <br />
                <form >
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label for="creationTimeField" className="form-label md-form md-outline input-with-post-icon">Date of Birth</label><br />
                        <div className="mb-3 input-group">
                            <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="form-control py-2 border-right-0 border" id="creationTimeField" placeholder="Enter your Birthdate" />
                            <span className="input-group-append ml-n1"></span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" value={confirmpass} onChange={(e) => setConfirmPass(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Confirm password" />
                    </div>


                    <div className="mb-3">
                        <select className="form-select" value={usertype} onChange={(e) => [setUsertype(e.target.value),handleshowhide(e)]} aria-label="Default select example">
                            <option value="">----Select user Type----</option>
                            <option value="d">Developer</option>
                            <option value="c">Company</option>
                        </select>
                    </div>
                    {showhide === 'd' && (
                        <div>
                            <div className="mb-3">
                                <select className="form-select" value={gender} onChange={(e) =>setGender(e.target.value)} aria-label="Default select example">
                                    <option value="">----Select gender----</option>
                                    <option value="f">Female</option>
                                    <option value="m">Male</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tagslist" className="form-label">Tags</label>
                                <Multiselect
                                    selectedValues={selectedTags}
                                    options={Tags}
                                    onSelect={onSelect}
                                    onRemove={onRemove}
                                    displayValue="label"
                                />
                            </div>
                            <div className="mb-3" >
                                <label for="inputGroupFile01" value={cv} onChange={(e) => setCv(e.target.value)} className="form-label">Upload Your CV</label>
                                <input type="file" className="form-control" id="inputGroupFile01" />
                            </div>
                            {/* <NavLink
                            type="submit"
                            to={`/login`}
                            onSubmit={handleSignUpUser}
                            className="btn btn-outline-primary btn-lg">
                            Register
                        </NavLink> */}
                        <button
                            onClick={handleSignUpUser}
                            className="btn btn-outline-primary btn-lg" >Register</button>
                        </div>
                    )
                    }
                    {
                        showhide === 'c' && (
                            <div>
                                <div className="mb-3">
                                    <label for="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} id="inputAddress" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">History</label>
                                    <textarea className="form-control" value={history} onChange={(e) => setHistory(e.target.value)}  id="exampleFormControlTextarea1" rows="3" cols='3'></textarea>
                                </div>
                            <button
                            // to={`/login`}
                            onClick={handleSignUpCompany}
                            className="btn btn-outline-primary btn-lg">
                            Register
                        </button>
                            </div>
                        )

                    }
                
                </form>
            </div>

        </div>

    )
}

export default SignupComponent;