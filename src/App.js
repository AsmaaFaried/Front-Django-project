import './App.css';
import  CreatejobComponent from './Components/CreatejobComponent' 
import ShowjobsComponent from './Components/ShowjobsComponent';
import SignupComponent from './Components/SignupComponent';
import LoginComponent from './Components/LoginComponent';
import HomeComponent from './Components/HomeComponent';
import JobdetailsComponent from './Components/JobdetailsComponent';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "primereact/resources/themes/vela-purple/theme.css"

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeComponent />} /> 
          <Route path="/" element={<HomeComponent />} /> 
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/jobs" element={<ShowjobsComponent />} />
          <Route path="/create" element={<CreatejobComponent />} />
          <Route path="/jobs/:id" element={<JobdetailsComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
