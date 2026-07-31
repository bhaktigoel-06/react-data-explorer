export default function StudentCard({ student }) {
  if (!student) return null;

  return (
    <div className="student-card">
      {/* IMAGE */}
      <img
        src={student.image}
        alt={student.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      {/* TITLE */}
      <h2>
        🆔 {student.id} - {student.title}
      </h2>

      {/* BASIC INFO */}
      <p><b>SPECIES:</b> {student.subtitle || "N/A"}</p>
      <p><b>STATUS:</b> {student.status || "Unknown"}</p>
      <p><b>GENDER:</b> {student.gender || "N/A"}</p>

      {/* EXTRA INFO */}
      <p><b>ORIGIN:</b> {student.origin || "Unknown"}</p>
      <p><b>LOCATION:</b> {student.location || "Unknown"}</p>

      {/* DATE FORMAT */}
      <p>
        <b>CREATED:</b>{" "}
        {student.created ? student.created.slice(0, 10) : "N/A"}
      </p>
    </div>
  );
}