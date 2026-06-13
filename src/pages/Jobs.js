import { Link } from "react-router-dom";
import { useState } from "react";

function Jobs() {
  const [search, setSearch] = useState("");

  const jobs = [
    { id: 1, title: "React Developer", company: "TCS" },
    { id: 2, title: "Java Developer", company: "Infosys" },
    { id: 3, title: "Python Developer", company: "Wipro" }
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Job Listings</h1>

      <input
        type="text"
        placeholder="Search Jobs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {filteredJobs.map((job) => (
        <div className="job-card" key={job.id}>
          <h3>{job.title}</h3>
          <p>Company: {job.company}</p>

          <Link to="/jobdetails">
            <button>View Details</button>
          </Link>
          <Link to="/apply">
  <button>Apply Now</button>
</Link>
        </div>
      ))}
    </div>
  );
}

export default Jobs;