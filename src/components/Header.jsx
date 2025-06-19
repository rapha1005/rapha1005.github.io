import Social from "./socialIcon"

export default function Header(){
    return(
        <header className="flex flex-col items-center mb-8 pt-5">
            <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1" className="text-white text-2xl font-bold mb-5 ">rapha1004</a>
            <Social />
        </header>
    )
}