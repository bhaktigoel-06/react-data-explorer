export function getAverageAge(students) {

  if(students.length === 0) return 0;

  const total = students.reduce(
    (sum, student) => sum + student.age,
    0
  );

  return (total / students.length).toFixed(2);
}


export function getCourseCount(students) {

  return students.reduce((acc, student)=>{

    acc[student.course] = (acc[student.course] || 0) + 1;

    return acc;

  }, {});

}