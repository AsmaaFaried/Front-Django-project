import './App.css';
import  CreatejobComponent from './Components/CreatejobComponent' 
import ShowjobsComponent from './Components/ShowjobsComponent';
import SignupComponent from './Components/SignupComponent';
import LoginComponent from './Components/LoginComponent';
import HomeComponent from './Components/HomeComponent';
import JobdetailsComponent from './Components/JobdetailsComponent';
import ProfileComponent from './Components/ProfileComponent';

function App() {
  
  return (
    <div className="App">
      {/* <CreatejobComponent/> */}
      <ProfileComponent/>
      
      {/* <ShowjobsComponent/> */}
      {/* <SignupComponent/> */}
      {/* <LoginComponent/> */}
      {/* <HomeComponent/> */}
      {/* <JobdetailsComponent/> */}
    </div>
  );
}

export default App;
