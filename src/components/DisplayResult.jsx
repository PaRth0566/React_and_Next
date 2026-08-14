import { useState } from "react";

function getGrade(total) {
  if (total >= 80) return { grade: "O", point: 10 };
  if (total >= 60) return { grade: "A", point: 8 };
  if (total >= 50) return { grade: "B", point: 6 };
  if (total >= 45) return { grade: "C", point: 5 };
  if (total >= 40) return { grade: "P", point: 4 };
  return { grade: "F", point: 0 };
}

function DisplayResult({ student }) {
  const [selectedSem, setSelectedSem] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  if (!student) {
    return (
      <div>
        <p>No student selected. Please go back to Page 1 and select a student.</p>
      </div>
    );
  }

  const semesters = [...new Set(student.exams.map((e) => e.sem))].sort();

  function handleShowResult() {
    if (student.exams.length === 0) {
      setError("No exam data inserted for this student");
      setResult(null);
      return;
    }

    if (!selectedSem) {
      setError("Please select a semester");
      setResult(null);
      return;
    }

    const matchedExams = student.exams.filter(
      (e) => e.sem === Number(selectedSem)
    );

    if (matchedExams.length === 0) {
      setError("No exam data found for this semester");
      setResult(null);
      return;
    }

    setError("");

    const subjects = matchedExams.map((exam) => {
      const total = exam.icaMarks + exam.eseMarks;
      const passed = total >= 40;
      const { grade, point } = getGrade(total);
      return {
        ...exam,
        total,
        passed,
        grade: passed ? grade : "F",
        gradePoint: passed ? point : 0,
      };
    });

    const totalMarks = subjects.reduce((sum, s) => sum + s.total, 0);
    const maxMarks = subjects.length * 100;
    const sgpa = (
      subjects.reduce((sum, s) => sum + s.gradePoint, 0) / subjects.length
    ).toFixed(2);
    const allPassed = subjects.every((s) => s.passed);

    setResult({
      subjects,
      sgpa,
      totalMarks,
      maxMarks,
      percentage: ((totalMarks / maxMarks) * 100).toFixed(2),
      allPassed,
    });
  }

  return (
    <div>
      <h1>Result Page</h1>

      Student ID: {student.studentId}<br />
      Program: {student.program}<br /><br />

      Sem: <select
        value={selectedSem}
        onChange={(e) => {
          setSelectedSem(e.target.value);
          setResult(null);
          setError("");
        }}
      >
        <option value="">-- Select --</option>
        {semesters.map((sem) => (
          <option key={sem} value={sem}>Semester {sem}</option>
        ))}
      </select>
      &nbsp;&nbsp;
      <button onClick={handleShowResult}>Show Result</button>
      <br /><br />

      {error && <label>{error}</label>}

      {result && (
        <div>
          <h3>Marksheet - Semester {selectedSem}</h3>
          <p>{student.name} | {student.rollNo} | {student.program}</p>

          <table border="1">
            <thead>
              <tr>
                <th>Subject</th>
                <th>ICA</th>
                <th>ESE</th>
                <th>Total</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {result.subjects.map((sub, i) => (
                <tr key={i}>
                  <td>{sub.subject}</td>
                  <td>{sub.icaMarks}</td>
                  <td>{sub.eseMarks}</td>
                  <td>{sub.total}</td>
                  <td>{sub.grade}</td>
                  <td>{sub.passed ? "Pass" : "Fail"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          Total: {result.totalMarks}/{result.maxMarks}<br />
          Percentage: {result.percentage}%<br />
          SGPA: {result.sgpa}<br />
          Result: {result.allPassed ? "PASSED" : "FAILED"}<br />
        </div>
      )}
    </div>
  );
}

export default DisplayResult;
