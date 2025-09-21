import "./About.css"

export default function About() {
    return (
        <div className="content-body">
            <h1>About Me</h1>
            <hr/>
            <div className="box">
                <span>
                Hello, I'm Ibrahim! Currently I am pursing my bachelors in computer science (hopefully soon my masters) at the University of Illinois Chicago!
                <br /><br />
                I love to make things, learn, play games, and build keyboards.
                TODO
                </span>
            </div>

            <MiniHeaderComponent title="Learning" />
            <div className="box">
                <span>
                I've always loved learning, it's been one of my favorite things to do. Even as a child, I sought out opportunities to expand my knowledge, often through structured courses. For example, in elementary school, I took a supplementary math class over the summer simply for fun. No one forced me, my parents, my school, nothing required it, but I enrolled anyway. That curiosity and drive to learn has stayed with me to this day.
                <br /><br />
                In more recent years, I've taken classes at my local community college alongside my university courses. Again, I did it for the joy of learning, not for degree credits or other practical benefits. Structured courses provide a helpful framework for diving into concepts I might not have explored on my own.
                <br /><br />
                Programming, however, has taught me a slightly different approach. While structured courses are valuable for understanding concepts and theory, I've found that I learn best by diving into projects and figuring things out as I go, just like I did while building this website. In these projects, my motivation goes beyond “I want to learn more.” It's also fueled by my passion for creating. There's immense satisfaction in bringing an idea to life, navigating challenges, and finally seeing everything come together into something functional and exciting.
                </span>
            </div>

            <MiniHeaderComponent title="Gaming" />
            <div className="box">
                <span>
                Gaming might not seem like a defining part of who I am, but it has actually sparked many of my skills and interests. For example, my time playing Fortnite led me to explore creative tools like Blender and Photoshop, where I made custom character renders. More recently, my passion for osu!, a rhythm game, inspired me to dive into SQL and Discord integrations. I wanted to build an auxiliary program for osu! that supports a custom scoring algorithm I developed. You can find more details about this project on my Projects page.
                </span>
            </div>

            <MiniHeaderComponent title="Keyboards" />
            <div>
                <div className="box">
                    <span>
                    Building custom keyboards has been more than just a hobby for me, it's been a hands-on way to learn and grow. Each build presented unique challenges, from troubleshooting hardware to refining design choices, and every project taught me valuable lessons in problem-solving, patience, and attention to detail. In this section, I'll share some of the keyboards I've built and the key takeaways I gained from each one.
                    </span>
                </div>
                <div className="box-grid">
                    <div className="box"><span>TODO</span></div>
                    <div className="box"><span>TODO</span></div>
                </div>
                <div className="box-grid">
                    <div className="box"><span>TODO</span></div>
                    <div className="box"><span>TODO</span></div>
                </div>
                <div className="box-grid">
                    <div className="box"><span>TODO</span></div>
                    <div className="box"><span>TODO</span></div>
                </div>
                <div className="box-grid">
                    <div className="box"><span>TODO</span></div>
                    <div className="box"><span>TODO</span></div>
                </div>
            </div>
        </div>

    )
}

function MiniHeaderComponent(props) {
    return (
        <>
            <h2>{props.title}</h2>
            <hr />
        </>
    )
}