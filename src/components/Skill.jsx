
export default function component({ name, yearsOfXp }){
    return (
        <li className="flex flex-col items-center">
        <p className="text-white text-3xl font-bold">{name}</p>
        <p className="text-white">{yearsOfXp} Years Experience</p>
    </li>
    )
}