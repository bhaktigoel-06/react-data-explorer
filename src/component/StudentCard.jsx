
export default function StudentCard({ student }) {
  return (
    <div className="student-card">
 <img src={student.image} alt={student.name} className="student-img" />

      <h2 className="student-name">
         🆔 {student.id} {student.name}
      </h2>

      <p><b>STATUS:</b> {student.status}</p>

      <p><b>SPECIES:</b> {student.species}</p>

      <p><b>GENDER:</b> {student.gender}</p>

      <p><b>ORIGIN:</b> {student.origin.name}</p>

      <p><b>LOCATION:</b>{student.location.name}</p>

     

      <p><b>CREATED:</b>{student.created}</p>

    </div>
  );
}
