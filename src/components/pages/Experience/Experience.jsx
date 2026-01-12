import "./Experience.css"

export default function Experience() {
    return (
        <div className="content-body">
            <h1>Work Experience</h1>
            <hr />
            <div className="box-line">
                <div className="box">
                    <h2>University of Illinois Chicago Computer Science Department</h2>
                    <span className="mini-text">Teaching Aide (January 2025-May 2025)</span>
                    <br />
                    <span>
                        As a teaching aide for an undergraduate Computer Science course on languages and automata, I led weekly lab sections where I reinforced key theoretical concepts and guided students through problem-solving techniques. I also held regular office hours to provide one-on-one support, helping students better understand topics in formal language theory and apply them to their coursework.
                        <br /><br />
                        Beyond direct student interaction, I collaborated with faculty and other teaching staff in weekly meetings to align on course goals and expectations. My responsibilities also included grading assignments and exams, as well as staying current with lecture material to ensure consistent and effective support for students throughout the semester
                    </span>
                </div>
            </div>
            <h1>Education</h1>
            <hr />
            <div className="box-line">
                <div className="box">
                    <h1>University of Illinois Chicago</h1>
                    <span className="mini-text">Bachelors & Masters in Computer Science (August 2023-Present)</span>
                    <br />
                    <span>
                        <h3>Relevant Coursework</h3>
                        <ul>
                            <li><b>Software Engineering</b>: Scrum development, Jira, detailed software design documentation, OOP, Python, React, Django</li>
                            <li><b>Framework-based Software Development for Hand-held Devices</b>: Dart, Flutter mobile development</li>
                            <li><b>Introduction to Data Science</b>: SQL, Python, data analysis, data scraping</li>
                            <li><b>Database Systems</b>: SQL, relational database design and querying</li>
                            <li><b>Software Design</b>: Java, software design principles, OOP</li>
                            <li><b>Data Structures</b>: C++, implementation and analysis of data structures</li>
                            <li><b>Computer Algorithms</b>: algorithm design and complexity analysis</li>
                        </ul>
                        <h3>Activities</h3>
                        <ul>
                            <li><b>Varsity ESports Player</b>: Represented UIC as a competitive esports athlete, developing teamwork, strategic thinking, and performance under pressure</li>
                        </ul>

                    </span>
                </div>
                <div className="box">
                    <h1>Community College</h1>
                    <span className="mini-text">No Degree (August 2022-July 2025)</span>
                    <br />
                    <span>
                        <h3>Relevant Coursework</h3>
                        <ul>
                            <li><b>Cloud Essentials+</b>: Cloud management and fundamentals</li>
                            <li><b>Intro to PHP Programming Language</b>: PHP programming basics</li>
                            <li><b>JavaScript Programming</b>: JavaScript fundamentals and web scripting</li>
                            <li><b>C++ Language Programming</b>: C++, OOP principles</li>
                        </ul>
                        <h3>Activities</h3>
                        <ul>
                            <li><b>JV ESports Captain</b>: Led the junior varsity esports team, developing leadership, communication, and team coordination skills</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    )
}