import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Welcome to Job Board</h1>

      <h2>Featured Jobs</h2>

      <ul>
        <li>React Developer</li>
        <li>Java Developer</li>
        <li>Python Developer</li>
      </ul>
      <Link to="/jobs">View All Jobs</Link>

<br /><br />

<Link to="/candidate">
  Candidate Dashboard
</Link>
<br /><br />

<Link to="/employer">
  Employer Dashboard
</Link>
    </div>
  );
}

export default Home;