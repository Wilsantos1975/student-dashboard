import StudentCard from "./StudentCard";

function StudentList({ studentCardDisplay , OneOnOne}) {
  return (
    <div className="student-list">
      <h2>All Students</h2>
      <p>
        Total Students: <span>{studentCardDisplay.length}</span>
      </p>
      <ul>
        {studentCardDisplay.map((student) => {
          return (
            <li key={student.id}>
              <StudentCard student={student} OneOnOne={OneOnOne} notes={student.notes}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StudentList;
