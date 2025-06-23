export default function Project({ link, description, image, name }) {
    return (
      <li className="text-white mb-11 flex flex-col">
        <img
          className="h-72 object-cover rounded-2xl mb-5"
          src={image}
          alt={name}
        />
        <h2 className="font-bold text-2xl mb-2">{name}</h2>
        <p className="text-[#D9D9D9] mb-5">{description}</p>
        <a
          href={link}
          target="_blank"
          className="underline tracking-widest decoration-[#4EE1A0] underline-offset-8 decoration-[2px] font-bold mb-20 w-max hover:text-[#4EE1A0] duration-150"
        >
          VIEW PROJECT
        </a>
      </li>
    );
  }
  