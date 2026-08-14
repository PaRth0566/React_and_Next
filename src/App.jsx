import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";
import DisplayResult from "./components/DisplayResult";

const studentsData = [
  { studentId: "s1", name: "Parth", rollNo: "90", program: "BScCS", exams: [] },
  { studentId: "s2", name: "Hardik", rollNo: "89", program: "BScCS", exams: [] },
];

function App() {
  const [students, setStudents] = useState(studentsData);
  const [selectedId, setSelectedId] = useState("");

  function addExam(studentId, exam) {
    setStudents(students.map((s) =>
      s.studentId === studentId ? { ...s, exams: [...s.exams, exam] } : s
    ));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentDetails students={students} selectedId={selectedId} setSelectedId={setSelectedId} addExam={addExam} />} />
        <Route path="/result" element={<DisplayResult student={students.find((s) => s.studentId === selectedId)} />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
