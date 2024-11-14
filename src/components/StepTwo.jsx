const StepTwo = ({ setResumeInfos, username, email, password }) => {
  return (
    <>
      <div>
        <div className="resumeInfos">
          <div>
            <h2>Result</h2>
            <p>Name : {username}</p>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
            <button type="submit" onClick={() => setResumeInfos(false)}>
              Edit your information
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepTwo;
