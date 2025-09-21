/* eslint-disable no-unused-vars */
import "./Links.css"
import { Glow } from "@codaworks/react-glow"
import { motion } from "framer-motion"
import GithubLogo from "../../../assets/github-mark-white.png"
import LinkedInLogo from "../../../assets/linkedin-logo-white.svg"
import Contact from "../../Web3Forms/Contact.jsx"

export default function Links() {
    return (
        <div className="content-body">
            <h1>Connect</h1>
            <hr />
            <div className="button-grid">
                <a></a>
                <SpecialButton text="Github" link="https://github.com/cloudiees" color="rgba(95, 237, 131, 0.3)" img={GithubLogo} title="Link to my Github page" enabled="True" />
                <a></a>
            </div>
            <Contact/>
        </div>
    )
}

function SpecialButton(props) {
    return (
        <motion.div
            {...(props.enabled === "True"
                ? { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }
                : {}
            )}
            style={{ display: "inline-block" }}>
            <Glow color={props.color}>
                <a className="glow-button-link" {...(props.enabled === "True" ? { href: props.link } : {})} target="_blank" title={props.title}>
                    <div {...(props.enabled === "True" ? { className: "glow-button" } : { className: "glow-button-disabled" })}>
                        <img src={props.img}  {...(props.enabled === "True" ? { className: "glow-button-img" } : { className: "glow-button-img-disabled" })} />
                        <span>
                            {props.text}
                        </span>
                    </div>
                </a>
            </Glow>
        </motion.div>
    )
}