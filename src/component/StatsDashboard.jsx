import { getAverageAge, getCourseCount } from "../utils/stats";

export default function StatsDashboard({students}){

const totalStudents = students.length;

const avgAge = getAverageAge(students);

const courseCount = getCourseCount(students);


return(
<div>

<h2>Total Students: {totalStudents}</h2>

<h2>Average Age: {avgAge}</h2>


<h3>Course Count:</h3>

{
Object.entries(courseCount).map(([course,count])=>(
<p key={course}>
{course}: {count}
</p>
))
}

</div>
)

}