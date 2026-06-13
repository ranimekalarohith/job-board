function EmployerDashboard() {
  return (
    <div>
      <h1>Employer Dashboard</h1>

      <h2>Post a New Job</h2>

      <form>
        <input
          type="text"
          placeholder="Job Title"
        />

        <br /><br />

        <input
          type="text"
          placeholder="Company Name"
        />

        <br /><br />

        <input
          type="text"
          placeholder="Salary"
        />

        <br /><br />

        <textarea
          placeholder="Job Description"
        ></textarea>

        <br /><br />

        <button type="submit">
          Post Job
        </button>
      </form>
    </div>
  );
}

export default EmployerDashboard;