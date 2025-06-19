

export default function component({ link, description, image, name }){
    return (
        <li className="text-white  mb-11">
            <img className="w-[100%] h-72 mb-5" src={image} />
            <h2 className="font-bold text-2xl mb-2">{name}</h2>
            <p className="text-[#D9D9D9] mb-5">{description}</p>
            <a href={link} className="underline tracking-widest decoration-[#4EE1A0] underline-offset-8 decoration-[2px] font-bold mb-20">VIEW PROJECT</a>
        </li>
    )
}