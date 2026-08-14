import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentDetails({ students, selectedId, setSelectedId, addExam }) {
  const navigate = useNavigate();
  const [tempId, setTempId] = useState(selectedId);
  const [subject, setSubject] = useState("");
  const [sem, setSem] = useState("");
  const [icaMarks, setIcaMarks] = useState("");
  const [eseMarks, setEseMarks] = useState("");

  const student = students.find((s) => s.studentId === selectedId);

  function handleSelectStudent() {
    setSelectedId(tempId);
  }

  function handleAddExam(e) {
    e.preventDefault();
    addExam(selectedId, {
      subject,
      sem: Number(sem),
      icaMarks: Number(icaMarks),
      eseMarks: Number(eseMarks),
    });
    setSubject("");
    setSem("");
    setIcaMarks("");
    setEseMarks("");
  }

  return (
    <div>
      <h1>Marksheet Maker</h1>

      <label>Select Student: </label>
      <select value={tempId} onChange={(e) => setTempId(e.target.value)}>
        <option value="">-- Select --</option>
        {students.map((s) => (
          <option key={s.studentId} value={s.studentId}>{s.name}</option>
        ))}
      </select>
      &nbsp;&nbsp;
      <button type="button" onClick={handleSelectStudent}>Select</button>

      {student && (
        <div>
          <p>Student ID: {student.studentId}</p>
          <p>Name: {student.name}</p>
          <p>Roll No: {student.rollNo}</p>
          <p>Program: {student.program}</p>

          <form onSubmit={handleAddExam}>
            <button type="submit">Add Exam Marks</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" onClick={() => navigate("/result")}>Next Page</button>
            <br /><br />

            <h3>Add Exam Marks</h3>
            Subject: <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required /><br />
            Sem: <input type="number" value={sem} onChange={(e) => setSem(e.target.value)} min="1" max="8" required /><br />
            ICA Marks: <input type="number" value={icaMarks} onChange={(e) => setIcaMarks(e.target.value)} min="0" max="20" required /><br />
            ESE Marks: <input type="number" value={eseMarks} onChange={(e) => setEseMarks(e.target.value)} min="0" max="80" required /><br />
          </form>
        </div>
      )}
    </div>
  );
}

export default StudentDetails;
