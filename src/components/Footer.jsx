import GithubLogo from "../assets/github-mark-white.png"

export default function Footer() {
    return(
        <div className="footer">
            <a href="https://github.com/cloudiees" target="_blank"><img src={GithubLogo}></img></a>
        </div>
    )
}