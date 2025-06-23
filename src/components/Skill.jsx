
export default function component({ name, yearsOfXp }){
    return (
        <li className="flex flex-col items-center md:items-start md:gap-3.5">
        <p className="text-white text-3xl font-bold md:text-5xl">{name}</p>
        <p className="text-white">{yearsOfXp} Years Experience</p>
    </li>
    )
}