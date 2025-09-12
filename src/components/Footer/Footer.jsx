import GithubLogo from "../../assets/github-mark-white.png"
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-vertical">
                <div className="footer-component">
                    <a href="https://github.com/cloudiees" target="_blank"><img src={GithubLogo} className="footer-img"></img></a>
                    <a href="https://github.com/cloudiees" target="_blank" className="footer-link">Github</a>
                </div>
                <div>
                    © 2025 Cloudiees
                </div>
            </div>
        </div>
    )
}