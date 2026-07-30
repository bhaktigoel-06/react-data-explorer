import { useState,useEffect } from "react";
import './App.css';

import Header from './component/Header';
import SearchBar from './component/SearchBar';
import CourseFilter from './component/CourseFilter';
import StudentList from './component/StudentList';
import StatsDashboard from './component/StatsDashboard';
import { useFetch } from "./hooks/useFetch";


export default function App() {
  const { data, loading, error } = useFetch();
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("All");

if (loading) return <h2>Loading...</h2>;
if (error) return <h2>Error: {error}</h2>;
const courses = [
  "All",
  ...new Set(data.map((s) => s.species))
];
  
  const filteredStudents = data.filter((s) => {
    const matchName = s.name.toLowerCase().includes(search.toLowerCase());
    const matchCourse = course === "All" || s.species === course;
    return matchName && matchCourse;
  });

  return (
    <>
      <Header />

     
     <div className="filter-container">

  <SearchBar 
    search={search} 
    setSearch={setSearch} 
  />

  <CourseFilter 
    courses={courses}
    course={course}
    setCourse={setCourse}
  />

</div>

    
     {
  filteredStudents.length === 0 ? (
    <div className="empty-state">
      <h2>No students match your search</h2>
    </div>
  ) : (
    <StudentList students={filteredStudents} />
  )
}
      
      <StatsDashboard students={filteredStudents} />
    </>
  );

  
}