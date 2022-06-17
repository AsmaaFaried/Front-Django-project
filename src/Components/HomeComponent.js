import { NavLink } from 'react-router-dom'
function HomeComponent(){

    return(
        <div className="home">
            <div className="st">
                <div className="content-home">
                    <h1>Join Us</h1><br/>
                    <p className="p-5">
                    If you would like to be part of a dynamic and forward-thinking company, then we want to hear from you. Please send your CV to <a href="#">office@paragraph.co.uk </a>
                    for consideration.

For a company like Paragraph to run efficiently, we require skills in the following areas: awards, commercial, design, editorial, events, management, marketing and production. 
                    </p>
                    <div>
                        <NavLink
                            type="button"
                            to={`/login`}
                            className="btn btn-outline-info m-5 btn-lg"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            type="button"
                            to={`/signup`}
                            className="btn btn-outline-success btn-lg"
                        >
                            Signup
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="snd"></div>

        </div>
       

    )
}
export default HomeComponent;