import { NavLink, useNavigate } from "react-router-dom";

let Navbar = () => {
    let navigate = useNavigate()
    let handleLogout = async ()=>{
        
    let token = localStorage.getItem("token")
        const response = await fetch("http://127.0.0.1:8000/api/v1/account/logout_user", {
            headers: {
                Authorization:`Token ${token}`
            }
        })
        const data = await response.json()
        localStorage.removeItem('token')

    }

    return (

        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <NavLink to={"/home"} className="btn btn-light ms-2">
                                Home
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to={"/jobs"} className="btn btn-light ms-2">
                                Jobs
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to={"/profile"} className="btn btn-light ms-2">
                                Profile
                            </NavLink>
                        </li>
                        <li class="nav-item" >
                            <button onClick={handleLogout} className="btn btn-light">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;