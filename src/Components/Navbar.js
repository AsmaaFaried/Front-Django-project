import { NavLink } from "react-router-dom";

let Navbar = () => {
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
                            <button className="btn btn-light">
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