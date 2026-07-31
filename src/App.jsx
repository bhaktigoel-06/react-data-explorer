import { useState } from "react";
import "./App.css";
import ThemeToggle from "./component/ThemeToggle";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import SpeciesFilter from "./component/Species";
import StudentList from "./component/StudentList";
import StatsDashboard from "./component/StatsDashboard";
import { useFetch } from "./hooks/useFetch";
import { getStats } from "./utils/stats";

export default function App() {
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("All");

  // ✅ HOOK CALL
  const { data, loading, error } = useFetch(search);

  // ✅ LOADING
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading characters...</p>
      </div>
    );
  }

  // ✅ ERROR
  if (error) {
    return (
      <div className="error-box">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  // ✅ FILTER OPTIONS (dynamic)
  const speciesList = [
    "All",
    ...new Set(data.map((s) => s.subtitle)),
  ];

  // ✅ FILTER LOGIC
  const filteredStudents =
    species === "All"
      ? data
      : data.filter((s) => s.subtitle === species);

  // ✅ STATS
  const stats = getStats(filteredStudents);

  return (
    <>
      <Header />

      <div className="filter-container">
  <SearchBar search={search} setSearch={setSearch} />

  <SpeciesFilter
    courses={speciesList}
    course={species}
    setCourse={setSpecies}
  />

  <div className="theme-row">
    <ThemeToggle />
  </div>
</div>
      {filteredStudents.length === 0 ? (
        <div className="empty-state">
          <h2>No characters found</h2>
        </div>
      ) : (
        <StudentList students={filteredStudents} />
      )}

      <StatsDashboard stats={stats} />
    </>
  );
}