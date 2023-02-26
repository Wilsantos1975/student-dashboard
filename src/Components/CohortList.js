function CohortList({
  displayAllStudents,
  cohortListDisplay,
  cohortFilterDisplay,
}) {
  const cohortArray = [];

  cohortListDisplay.forEach((element) => {
    let classNameDisplay = /[0-9]/;
    let year = element.cohort.cohortCode.slice(-4);
    let season = element.cohort.cohortCode.slice(
      0,
      element.cohort.cohortCode.search(classNameDisplay)
    );
    let clearCohort = `${season} ${year}`;
    if (!cohortArray.includes(clearCohort)) {
      cohortArray.push(clearCohort);
    }
  });

  return (
    <div className="cohort-list">
      <h3>Choose a Class by start date</h3>
      <ul>
      <li onClick={displayAllStudents}>All Students</li>
        {cohortArray.map((cohort) => {
          return (
            <li key={`${cohort}${1}`} onClick={() => cohortFilterDisplay(cohort)}>
              {cohort}
              <br></br>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CohortList;
