"use client";

import { useState } from "react";

const students = [
  // STUdent 1
  {
    studentId: "40721240034",
    name: "Parth Rathod",
    rollNo: "090",
    program: "BSc. CS",
    exams: [
      // s1
      {
        sem: 1,
        subject: "C programming",
        icaMarks: 8,
        eseMarks: 55,
      },
      // s2
      {
        sem: 2,
        subject: "CN",
        icaMarks: 28,
        eseMarks: 20,
      },
      // s3
      {
        sem: 3,
        subject: "DBMS",
        icaMarks: 16,
        eseMarks: 24,
      },
      // s4
      {
        sem: 4,
        subject: ".Net",
        icaMarks: 22,
        eseMarks: 55,
      },
      {
        sem: 4,
        subject: "PHP",
        icaMarks: 18,
        eseMarks: 45,
      },
      {
        sem: 4,
        subject: "Flutter",
        icaMarks: 25,
        eseMarks: 35,
      },
      {
        sem: 4,
        subject: "Next.js",
        icaMarks: 8,
        eseMarks: 55,
      },
    ],
  },
  // Student 2
  {
    studentId: "40721240033",
    name: "Hardik Rathod",
    rollNo: "089",
    program: "BSc. CS",
    exams: [
      //s5
      {
        sem: 5,
        subject: "R",
        icaMarks: 23,
        eseMarks: 45,
      },
      {
        sem: 5,
        subject: "Rust",
        icaMarks: 15,
        eseMarks: 55,
      },
      {
        sem: 5,
        subject: "C++",
        icaMarks: 18,
        eseMarks: 49,
      },
    ],
  },
];

function getGrade(total) {
    if (total >= 80) return { grade: "O", point: 10 };
    if (total >= 60) return { grade: "A", point: 8 };
    if (total >= 50) return { grade: "B", point: 6 };
    if (total >= 45) return { grade: "C", point: 5 };
    if (total > 40) return { grade: "P", point: 4 };

    return { grade: "F", point: 0 };
}

export default function Page() {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedSem, setSelectedSem] = useState("");
  const [resumeToPipeableStream, setResult] = useState(null);
  const [error, setError] = useState("");

  // To get the student array
  const student = students.find(
    (student) => student.studentId === selectedStudent,
  );

  // To get the semester for that student
  const semesters = student
    ? [...new Set(student.exams.map((exam) => exam.sem))].sort()
    : [];

  // to handle the Show result button
  function handleShowResult() {
    if (!student) {
      setError("Please select a student");
      setResult(null);
      return;
    }
    if (!selectedSem) {
      setError("Please select a semester");
      setResult(null);
      return;
    }
    // find subjects for the resp student and semester
    const subjects = student.exams
      .filter((exam) => exam.sem === Number(selectedSem))
      .map((exam) => {
        const total = exam.icaMarks + exam.eseMarks;
        const icaPassed = exam.icaMarks > 16;
        const esePassed = exam.eseMarks > 24;
        const totalPassed = total > 40;
        const passed = icaPassed && esePassed && totalPassed;

      });
  }

  return (
    <main>
      <h1>Student Result</h1>
      <br />
      <label>Student: </label>
      <select
        value={selectedStudent}
        onChange={(e) => {
          setSelectedStudent(e.target.value);
          setSelectedSem("");
        }}
      >
        <option value="">Select Student </option>
        {students.map((student) => (
          <option key={student.studentId} value={student.studentId}>
            {student.name}
          </option>
        ))}
      </select>
      <br />
      <label>Semester: </label>
      <select
        value={selectedSem}
        onChange={(e) => setSelectedSem(e.target.value)}
      >
        <option value="">Select Semester </option>
        {semesters.map((sem) => (
          <option key={sem} value={sem}>
            Semester {sem}
          </option>
        ))}
      </select>{" "}
      <button onClick={handleShowResult}>Show Result</button>
    </main>
  );
}
