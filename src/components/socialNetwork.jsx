    const list = [
        {alt: "github", icon: "./src/assets/github.svg", link: "https://github.com/rapha1004"},
        {alt: "x", icon: "./src/assets/x.svg", link: "https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"},
        {alt: "linkedin", icon: "./src/assets/linkedin.svg", link: "https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"}
    ]

    export default function component(){
        return (
            <div className="flex gap-6">
                            {list.map((item, index) => (
                <a key={index} href={item.link} target="_blank">
                    <img src={item.icon} alt={item.alt} />
                </a>
            ))}
            </div>
        )
    }