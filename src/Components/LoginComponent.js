
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

function LoginComponent(){

    return(
        <div className="login-content">
            
            <div className='w-25 form-card login'>
            <h2 >Login</h2>
            <br/>
            <form action="#" >
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password"/>
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