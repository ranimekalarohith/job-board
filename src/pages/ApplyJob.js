function ApplyJob() {
  return (
    <div>
      <h1>Apply for Job</h1>

      <form>
        <input
          type="text"
          placeholder="Enter Your Name"
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Your Email"
        />

        <br /><br />

        <input
          type="file"
        />

        <br /><br />

        <button type="submit">
          Apply
        </button>
      </form>
    </div>
  );
}

export default ApplyJob;