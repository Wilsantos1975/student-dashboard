import { useState } from "react";

function StudentCard({ student , OneOnOne, notes}) {
  const [showMore, setShowMore] = useState(false);

  // const baseURL = "https://robohash.org/";
  // let randomNumber = Math.floor(Math.random() * 10);
  // let photo = `${baseURL}${randomNumber}`;

  let studentDate = new Date(student.dob).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  function showMoreDetails() {
    if(showMore === false){
      setShowMore(true) 
    } else {  
      setShowMore(false)
    } 
  }

  return (
    <div className="student-card">
      <img src={""} alt="" />
      <h6>
        <strong>
          {student.names.preferredName}{" "}
          {student.names.middleName[0].toUpperCase()}. {student.names.surname}
        </strong>
      </h6>
      <p>{student.username}</p>
      <p className="birthday">
        <span>Birthday:</span>
        {studentDate}
      </p>
      <br></br>
      <p onClick={() => showMoreDetails()}>
        {showMore ? "Show Less..." : "Show More..."}
      </p>
      {showMore ? (
        <div className="studentInfo">
          <div className="codewars">
            <h4>
              <strong>Codewars</strong>
            </h4>
            <p>Current Total:{student.codewars.current.total}</p>
            <p>Last Week:{student.codewars.current.lastWeek}</p>
            <p>Goal:{student.codewars.goal.total}</p>
            <p>
              Percent of Goal Achieved:{" "}
              {Math.round(
                (student.codewars.current.total / student.codewars.goal.total) *
                  100
              )}
              %
            </p>
          </div>
          <div className="scores">
            <h4>
              <strong>Assigments</strong>
            </h4>
            <p>Assigments:{student.cohort.scores.assignments * 100} %</p>
            <p>Projects:{student.cohort.scores.projects * 100} %</p>
            <p>Assessments:{student.cohort.scores.assessments * 100} %</p>
          </div>

          <div className="certifications">
            <h4>
              <strong>Certifications</strong>
            </h4>
            <p>Resume:{student.certifications.resume ? "✅" : "❌"}</p>
            <p>LinkedIn:{student.certifications.linkedIn ? "✅" : "❌"}</p>
            <p>
              Mock Interview:{" "}
              {student.certifications.mockInterview ? "✅" : "❌"}
            </p>
            <p>GitHub:{student.certifications.gitHub ? "✅" : "❌"}</p>
          </div>
          <OneOnOne notes={notes}/>
        </div>
      ) : null}
    </div>
  );
}

export default StudentCard;
