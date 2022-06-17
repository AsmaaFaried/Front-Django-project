import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function LoginComponent(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate()

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/v1/account/rest_login/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            let resJson = await res.json();
            console.log(resJson)
            if (res.status === 200) {
                setUsername("");
                setPassword("");
            }
            navigate('../home/', { replace: true })
        } catch (err) {
            console.log(err);
        }
    };

    return(
        <div className="login-content">
            <div className='w-25 form-card login'>
            <h2 >Login</h2>
            <br/>
            <form onSubmit={handleSubmit}>
               <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter your name"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter password"/>
                </div>

                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
            </div>
        </div>
        
    )
}

export default LoginComponent;