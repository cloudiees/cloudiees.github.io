import "./About.css"

export default function About() {
    return (
        <div className="content-body">
            <MiniHeaderComponent title="Me" />
            <div className="box">
                Hello, I'm Ibrahim! Currently I am pursing my bachelors in computer science (hopefully soon my masters) at the University of Illinois Chicago!
                <br /><br />
                I love to make things, learn, play games, and build keyboards.

            </div>

            <MiniHeaderComponent title="Learning" />
            <div className="box">
                I've always loved learning, it's been one of my favorite things to do. Even as a child, I sought out opportunities to expand my knowledge, often through structured courses. For example, in elementary school, I took a supplementary math class over the summer simply for fun. No one forced me, my parents, my school, nothing required it, but I enrolled anyway. That curiosity and drive to learn has stayed with me to this day.
                <br /><br />
                In more recent years, I've taken classes at my local community college alongside my university courses. Again, I did it for the joy of learning, not for degree credits or other practical benefits. Structured courses provide a helpful framework for diving into concepts I might not have explored on my own.
                <br /><br />
                Programming, however, has taught me a slightly different approach. While structured courses are valuable for understanding concepts and theory, I've found that I learn best by diving into projects and figuring things out as I go, just like I did while building this website. In these projects, my motivation goes beyond “I want to learn more.” It's also fueled by my passion for creating. There's immense satisfaction in bringing an idea to life, navigating challenges, and finally seeing everything come together into something functional and exciting.
            </div>

            <MiniHeaderComponent title="Gaming" />
            <div className="box">

            </div>

            <MiniHeaderComponent title="Keyboards" />
            <div className="box-grid">
                <div className="box">test</div>
                <div className="box">bskdfjalsfjlksjdafklsjfasdlfjsakldfj</div>
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