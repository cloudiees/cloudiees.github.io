import "./Projects.css"

export default function Projects() {
    return (
        <div className="content-body">
            <h1>Projects</h1>
            <hr />
            <div className="box">
                <div className="project-header">
                    <h2>osu! Pass Performance Points</h2>
                    <a href="https://github.com/cloudiees/osu-pass-performance-points" target="_blank">Github Repo</a>
                </div>
                <span>
                    An application built with Python, SQL, and a Discord bot serving as the front end. The Python backend integrates with the osu!API to retrieve player data, scores, and map information, which are then stored in a structured SQL database. A custom algorithm processes the stored map data to calculate performance point values for user scores.
                    <br /><br />
                    Users interact with the system entirely through the Discord bot, which communicates with the backend to update and query the database. Key bot commands and features include:
                    <ul>
                        <li>Score Submission: Scans all valid maps for submitted scores, with both automated and manual submission options.</li>
                        <li>Auto Score Scan: A timer-based subprocess that periodically checks recent user scores and automatically submits valid results.</li>
                        <li>Account Linking: Connects a user's osu! account to their Discord profile for accurate data retrieval.</li>
                        <li>Leaderboard Retrieval: Provides leaderboards at both the global level and per individual map.</li>
                    </ul>
                    While I am the sole developer, the project has been shaped by active feedback from its userbase, making it a collaborative effort in design and refinement.
                </span>
            </div>

            <div className="box">
                <div className="project-header">
                    <h2>Weather App (?)</h2>
                    <a href="https://github.com/cloudiees/StudyTimer" target="_blank">Github Repo (I don't know if I am allowed to shared this repo or not) so it links to the wrong thing right now</a>
                </div>
                <span>TODO</span>
            </div>

            <div className="box">
                <div className="project-header">
                    <h2>Study Timer</h2>
                    <a href="https://github.com/cloudiees/StudyTimer" target="_blank">Github Repo</a>
                </div>
                <span>TODO</span>
            </div>
        </div>
    );
}
