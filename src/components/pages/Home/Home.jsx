/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css"

export default function Home() {
    return (
        <div className="home-content">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 } }}
            >
                <h1>Hey, I'm Ibrahim</h1>
                <h6>A CS major @ UIC</h6>
            </motion.div>
        </div>
    )
}