import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import CandidateDashboard from "./pages/CandidateDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import ApplyJob from "./pages/ApplyJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobdetails" element={<JobDetails />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route
  path="/candidate"
  element={<CandidateDashboard />}
/>

<Route
  path="/employer"
  element={<EmployerDashboard />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;