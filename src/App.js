import StudentList from "./Components/StudentList";
import CohortList from "./Components/CohortList";
import data from "./data/data.json";
import { useState } from "react";
import Header from "./Components/Header";
import OneOnOne from "./Components/OneOnOne";
function App() {
  const [studentCardDisplay, setStudentCardDisplay] = useState(data);
  const [cohortListDisplay, setCohortListDisplay] = useState(data);
  const [cohortFilter, setCohortFilter] = useState(data);

  function cohortFilterDisplay(list) {
    const filteredCohort = cohortFilter.filter((cohort) => {
      return cohort.cohort.cohortCode === list.split(" ").join("");
    });
    setStudentCardDisplay(filteredCohort);
  }

  function displayAllStudents() {
    setStudentCardDisplay(data);
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <CohortList
          cohortListDisplay={cohortListDisplay}
          cohortFilterDisplay={cohortFilterDisplay}
          displayAllStudents={displayAllStudents}
        />
        <StudentList studentCardDisplay={studentCardDisplay} OneOnOne={OneOnOne}/>
      </div>
    </div>
  );
}

export default App;
