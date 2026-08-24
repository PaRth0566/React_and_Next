"use client";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black px-5">
      <h1 className="text-center pt-1 pb-2 text-2xl font-semibold">ABC</h1>
      <hr />
      <div className="flex flex-col pb-3 w-full">
        <div className="flex justify-between items-center w-full">
          <div>
            <b>Email:</b> abc@gmail.com
          </div>
          <div>
            <b>LinkedIn:</b> linkedin.com/in/abc
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <b>Phone:</b> +91 9876543210
          </div>
          <div>
            <b>GitHub:</b> github.com/abc
          </div>
        </div>
      </div>

      <h1 className="text-xl font-semibold">Career Objective</h1>
      <hr />
      <p className="pb-3">
        Seeking an opportunity to apply my analytical, technical, and
        problem-solving skills in a challenging enviroment while continuously
        learning and contributing to organizational growth.
      </p>

      <h1 className="text-xl font-semibold">Experience</h1>
      <hr />
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <div>
            <b>Data Analytics Intern, ABC Company</b>
          </div>
          <div>Jan 2026 - Mar 2026</div>
        </div>
      </div>
      <p>
        Assisted in collecting, cleaning, and analyzing business data using
        Excel and SQL. Developed interactive Power BI dashboards and prepared
        reports to support business decision-making
      </p>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <div>
            <b>Software Development Intern, XYZ Technologies </b>
          </div>
          <div>Jun 2025 - Aug 2025</div>
        </div>
      </div>
      <p className="pb-3">
        Worked on developing and testing web application modules using HTML,
        CSS, JavaScript, and MySQL. Collaborated with the development team to
        fix bugs and improve application performance.
      </p>

      <h1 className="text-xl font-semibold">Academic Project</h1>
      <hr />
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <div>
            <b>ABC Management System </b>
          </div>
          <div>Jan 2026 - Apr 2026</div>
        </div>
      </div>
      <p>
        Developed a web-based application for managing records, user
        authentication, and report generation using modern web technologies. The
        system improves efficiency through automated workflows and a
        user-friendly interface
      </p>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <div>
            <b>XYZ Sales Analytics Dashboard </b>
          </div>
          <div>Oct 2025</div>
        </div>
      </div>
      <p className="pb-3">
        Designed an interactive dashboard using Power BI to visualize sales
        trends, regional performance, customer insights, and key business
        metrics with dynamic reports and charts.
      </p>

      <h1 className="text-xl font-semibold">Achievements</h1>
      <hr />
      <div className="font-semibold">
        Participated in XYZ Project Competition (2025)
      </div>
      <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
        <li>
          Presented an innovative technology-based solution in the software
          development category.
        </li>
      </ul>
      <div className="font-semibold">Completed ABC Hackathon (2025)</div>
      <ul
        style={{ listStyleType: "disc", paddingLeft: "40px" }}
        className="pb-3"
      >
        <li>
          Collaborated with a team to develop a prototype application within the
          given timeline.
        </li>
      </ul>

      <h1 className="text-xl font-semibold">Certificates</h1>
      <hr />
      <div className="font-semibold">ABC Data Analytics Program (2025)</div>
      <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
        <li>
          Learned data visualization, reporting, and dashboard creation
          techniques.
        </li>
      </ul>
      <div className="font-semibold">
        XYZ Python Programming Certification (2024)
      </div>
      <ul
        style={{ listStyleType: "disc", paddingLeft: "40px" }}
        className="pb-3"
      >
        <li>
          Gained knowledge of Python programming, data structures, and
          problem-solving concepts.
        </li>
      </ul>

      <h1 className="text-xl font-semibold">Skills</h1>
      <hr />
      <div>
        <b>Technical: </b>Python, SQL, Power BI, MS Excel
      </div>
      <div>
        <b>Soft Skills: </b>Communication, Teamwork, Problem Solving,
        Adaptability
      </div>
      <div className="pb-3">
        <b>Languages:</b> English, Hindi, XYZ Language
      </div>

      <h1 className="text-xl font-semibold">Education</h1>
      <hr />
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <div className="font-semibold">Master of Science (ABC)</div>
          <div>Expected May 2027</div>
        </div>
        <div>XYZ College, XYZ University</div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <div className="font-semibold">Bachelor of Science (XYZ)</div>
          <div>Apr 2025</div>
        </div>
        <div>ABC College, XYZ University</div>
        <div>CGPA: 8.90</div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <div className="font-semibold">Higher Secondary Education (12th) </div>
          <div>May 2022</div>
        </div>
        <div>XYZ Junior College</div>
        <div>Percentage: 80.00</div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <div className="font-semibold">Secondary School Education (12th) </div>
          <div>May 2020</div>
        </div>
        <div>ABC High School</div>
        <div>Percentage: 88.00</div>
      </div>
    </main>
  );
}
