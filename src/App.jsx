import { useState } from "react";
import "./App.css";

import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import CourseFilter from "./component/CourseFilter";
import StudentList from "./component/StudentList";
import StatsDashboard from "./component/StatsDashboard";
import { useFetch } from "./hooks/useFetch";
import { getStats } from "./utils/stats";

export default function App() {
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("All");

  const { data, loading, error, retry } = useFetch(search);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading characters...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-box">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button onClick={retry}>Retry</button>
      </div>
    );
  }

  const courses = [
    "All",
    ...new Set(data.map((s) => s.species)),
  ];

  const filteredStudents =
    course === "All"
      ? data
      : data.filter((s) => s.species === course);

  
  const stats = getStats(filteredStudents);

  return (
    <>
      <Header />

      <div className="filter-container">
        <SearchBar search={search} setSearch={setSearch} />

        <CourseFilter
          courses={courses}
          course={course}
          setCourse={setCourse}
        />
      </div>

      {filteredStudents.length === 0 ? (
        <div className="empty-state">
          <h2>No students match your search</h2>
        </div>
      ) : (
        <StudentList students={filteredStudents} />
      )}

      
      <StatsDashboard stats={stats} />
    </>
  );
}