"use client";

import { useState } from "react";

const students = [
  {
    studentId: "40721240034", name: "Parth Rathod", rollNo: "090", program: "BSc. CS",
    exams: [
      { sem: 1, subject: "C programming", icaMarks: 8, eseMarks: 55, credits: 3 },
      { sem: 2, subject: "CN", icaMarks: 28, eseMarks: 20, credits: 3 },
      { sem: 3, subject: "DBMS", icaMarks: 16, eseMarks: 24, credits: 3 },
      { sem: 4, subject: ".Net", icaMarks: 22, eseMarks: 55, credits: 3 },
      { sem: 4, subject: "PHP", icaMarks: 18, eseMarks: 45, credits: 3 },
      { sem: 4, subject: "Flutter", icaMarks: 25, eseMarks: 35, credits: 3 },
      { sem: 4, subject: "Next.js", icaMarks: 8, eseMarks: 55, credits: 3 },
    ],
  },
  {
    studentId: "40721240033", name: "Hardik Rathod", rollNo: "089", program: "BSc. CS",
    exams: [
      { sem: 5, subject: "R", icaMarks: 23, eseMarks: 45, credits: 3 },
      { sem: 5, subject: "Rust", icaMarks: 15, eseMarks: 55, credits: 3 },
      { sem: 5, subject: "C++", icaMarks: 18, eseMarks: 49, credits: 3 },
    ],
  },
];

function getGrade(total) {
  if (total >= 80) return ["O", 10];
  if (total >= 60) return ["A", 8];
  if (total >= 50) return ["B", 6];
  if (total >= 45) return ["C", 5];
  if (total > 40) return ["P", 4];
  return ["F", 0];
}

export default function Page() {
  const [studentId, setStudentId] = useState("");
  const [sem, setSem] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const student = students.find((s) => s.studentId === studentId);
  const semesters = student
    ? [...new Set(student.exams.map((e) => e.sem))].sort()
    : [];

  function showResult() {
    if (!student) return setError("Please select a student"), setResult(null);
    if (!sem) return setError("Please select a semester"), setResult(null);

    const subjects = student.exams
      .filter((e) => e.sem === Number(sem))
      .map((e) => {
        const total = e.icaMarks + e.eseMarks;
        const passed =
          e.icaMarks > 16 && e.eseMarks > 24 && total > 40;
        const [grade, point] = getGrade(total);

        return {
          ...e,
          total,
          passed,
          grade: passed ? grade : "F",
          cxg: e.credits * (passed ? point : 0),
        };
      });

    if (!subjects.length)
      return setError("No exam data found for this semester"), setResult(null);

    const totalMarks = subjects.reduce((a, s) => a + s.total, 0);
    const maxMarks = subjects.length * 100;
    const credits = subjects.reduce((a, s) => a + s.credits, 0);
    const cxg = subjects.reduce((a, s) => a + s.cxg, 0);

    setError("");
    setResult({
      subjects,
      totalMarks,
      maxMarks,
      percentage: ((totalMarks / maxMarks) * 100).toFixed(2),
      sgpa: (cxg / credits).toFixed(2),
      passed: subjects.every((s) => s.passed),
    });
  }

  return (
    <main>
      <h1>Student Result</h1>

      <label>Student: </label>
      <select
        value={studentId}
        onChange={(e) => {
          setStudentId(e.target.value);
          setSem("");
          setResult(null);
          setError("");
        }}
      >
        <option value="">Select Student</option>
        {students.map((s) => (
          <option key={s.studentId} value={s.studentId}>
            {s.name}
          </option>
        ))}
      </select>

      <br />

      <label>Semester: </label>
      <select
        value={sem}
        onChange={(e) => {
          setSem(e.target.value);
          setResult(null);
          setError("");
        }}
      >
        <option value="">Select Semester</option>
        {semesters.map((s) => (
          <option key={s} value={s}>
            Semester {s}
          </option>
        ))}
      </select>{" "}

      <button onClick={showResult}>Show Result</button>

      {error && <p>{error}</p>}

      {result && (
        <>
          <h2>Mithibai College</h2>

          Name: {student.name}
          <br />
          SAP Id: {student.studentId}
          <br />
          Roll no: {student.rollNo}
          <br />
          Programme: {student.program}
          <br />
          Sem: {sem}

          <table border="1">
            <thead>
              <tr>
                <th>SR.</th>
                <th>Subject</th>
                <th>ICA Marks</th>
                <th>ICA Max Marks</th>
                <th>ESE Marks</th>
                <th>ESE Max Marks</th>
                <th>Total Marks</th>
                <th>Credits</th>
                <th>Grade</th>
                <th>C x G</th>
              </tr>
            </thead>

            <tbody>
              {result.subjects.map((s, i) => (
                <tr key={s.subject}>
                  <td>{i + 1}</td>
                  <td>{s.subject}</td>
                  <td>{s.icaMarks}</td>
                  <td>40</td>
                  <td>{s.eseMarks}</td>
                  <td>60</td>
                  <td>{s.total}</td>
                  <td>{s.credits}</td>
                  <td>{s.grade}</td>
                  <td>{s.cxg}</td>
                </tr>
              ))}
            </tbody>
          </table>

          SGPA: {result.sgpa}
          <br />
          Total: {result.totalMarks}/{result.maxMarks}
          <br />
          Percentage: {result.percentage}%
          <br />
          Result: {result.passed ? "PASSED" : "FAILED"}
        </>
      )}
    </main>
  );
}