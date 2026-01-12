import "./Projects.css"

export default function Projects() {
    return (
        <div className="content-body">
            <h1>Projects</h1>
            <hr />
            <div className="box-line">
                <div className="box">
                    <div className="project-header">
                        <h2>osu! Pass Performance Points</h2>
                        <a href="https://github.com/cloudiees/osu-pass-performance-points" target="_blank">Github Repo</a>
                    </div>
                    <span>
                        A Discord bot powered by a Python + SQL backend that integrates with the osu!API to track player scores, maps, and performance data. The backend stores results in a structured SQL database and applies a custom algorithm to calculate performance point values for user submissions.
                        <br /><br />
                        Users interact entirely through the Discord bot, which supports features such as score submission (manual or automated), timer-based auto score scans, account linking for accurate data retrieval, and both global and map-specific leaderboards.
                        <br /><br />
                        Although I developed the system independently, its features and design were shaped by continuous feedback from the active community using it, making the project a collaborative effort between developer and userbase.
                    </span>
                </div>

                <div className="box">
                    <div className="project-header">
                        <h2>Weather App</h2>
                        <a href="https://github.com/cloudiees/cs342-weather-app" target="_blank">Github Repo</a>
                    </div>
                    <span>
                        A desktop application built in Java that retrieves real-time weather data through API requests and presents it in a simple, user-friendly interface. The app displays current weather conditions and dynamically updates UI images to reflect the forecast, providing both functionality and visual context.
                        <br /><br />
                        This project gave me experience with Java programming, API integration, and connecting data-driven logic with responsive UI elements.
                    </span>
                </div>

                <div className="box">
                    <div className="project-header">
                        <h2>Study Timer</h2>
                        <a href="https://github.com/cloudiees/StudyTimer" target="_blank">Github Repo</a>
                    </div>
                    <span>
                        A Windows-only desktop app built with Python, Tkinter, and PowerShell to help balance study and break sessions. It features configurable timers, pause/resume controls, and an application blacklist that can either warn or force-close distracting apps in “extremist mode.”
                        <br /><br />
                        I created this project during Apple Hacks as my first attempt at building a GUI in Python. Along the way, I learned how to integrate Python with PowerShell for process management, handle event loops in Tkinter, and design (if a bit messily!) a functional desktop UI.
                    </span>
                </div>

                <div className="box">
                    <div className="project-header">
                        <h2>Connect4</h2>
                        <a href="https://github.com/cloudiees/cs342-connect4" target="_blank">Github Repo</a>
                    </div>
                    <span>
                        A Java client-server application that brings the classic Connect4 game online with account management and leaderboards powered by SQL. Players can compete either against each other or against a built-in bot, with all results stored and tracked in a central database.
                        <br /><br />
                        Key features include account creation and login, persistent leaderboards, player-vs-player matchmaking, and a player-vs-bot mode. This project strengthened my skills in Java, client-server communication, and database integration while combining game logic with user management.
                    </span>
                </div>

                <div className="box">
                    <div className="project-header">
                        <h2>PrayerReminder</h2>
                        <a href="https://github.com/cloudiees/PrayerReminder" target="_blank">Github Repo</a>
                    </div>
                    <span>
                        A desktop application built with C# and the .NET Framework to provide users with accurate daily prayer times. The app integrates with a RESTful API to fetch up-to-date schedules, parses the responses, and displays the information in a clean, user-friendly interface.
                        <br /><br />
                        Behind the scenes, I implemented custom data structures to efficiently store and manage prayer time data, ensuring the application stayed responsive while updating in real time. This project strengthened my skills in C#, API integration, and desktop UI development while giving me practical experience in performance optimization and user-focused design.
                    </span>
                </div>

                <div className="box">
                    <div className="project-header">
                        <h2>Brython Snake</h2>
                        <a href="https://github.com/cloudiees/Brython-snake" target="_blank">Github Repo</a>
                    </div>
                    <span>
                        A simple Snake game built as a Python web app using Brython, which runs Python directly in the browser. This was an experiment in combining Python logic with front-end web rendering.
                        <br /><br />
                        The project is no longer functional because image assets were lost from the original hosting site, but it gave me early experience with browser-based Python, DOM interaction, and real-time game loops.
                    </span>
                </div>
            </div>
            <h1>Contributions</h1>
            <hr />
            <div className="box-line">
                <div className="box">
                    <div className="project-header">
                        <h2>FSM Engine</h2>
                        <a href="https://github.com/karthik-saiharsh/fsm-engine" target="_blank">Github Repo</a>
                    </div>
                    <span>
                        I contributed to an open source project on GitHub that implements a web-based FSM editor. My work focused on improving the usability and robustness of the editor. Specifically, I added safeguards to prevent duplicate transitions between states, introduced intuitive node deselection behavior when clicking on the background, and implemented deleting transitions to make editing smoother.
                        <br /><br />
                        This project gave me valuable experience working in a shared codebase, following GitHub workflows such as pull requests and code reviews, and collaborating with other developers in an open source setting.
                    </span>
                </div>
            </div>
        </div>
    );
}
