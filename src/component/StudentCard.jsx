
export default function StudentCard({ student }) {
  return (
    <div className="student-card">

      <h2 className="student-name">
         🆔 {student.id} {student.name}
      </h2>

      <p>📧 {student.status}</p>

      <p>🎓 {student.species}</p>

      <p>👨🏾‍🤝‍👨🏼 {student.gender}</p>

      <p>🌏 {student.origin.name}</p>

      <p></p>

    </div>
  );
}
