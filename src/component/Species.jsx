export default function CourseFilter({ courses, course, setCourse }) {

  return (
    <select
      value={course}
      onChange={(e) => setCourse(e.target.value)}
    >

      {
        courses.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))
      }

    </select>
  );
}