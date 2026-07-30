import StudentCard from "./StudentCard";
export default function StudentList({ students, onDelete }) {
  return (
    <div className="student-grid">

      {students.map((s) => (
        <StudentCard 
          key={s.id} 
          student={s}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}

