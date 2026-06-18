import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task 15 Full Stack Integration</h1>

      {students.map((student) => (
        <p key={student.id}>{student.name}</p>
      ))}
    </div>
  );
}

export default App;