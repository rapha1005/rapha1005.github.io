import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

import pp from "../assets/pp.jpg"

export default function Component() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (!typewriterRef.current) return;

    const typewriter = new Typewriter(typewriterRef.current, {
      loop: false,
      delay: 60,
    });

    typewriter
      .typeString("Nice to meet you! I’m ")
      .pauseFor(500)
      .typeString('<span class="underline decoration-[#4EE1A0] decoration-[4px] underline-offset-8">Raaaaaphaël</span>.')
      .start();

    return () => typewriter.stop();
  }, []);

  return (
    <div className="w-[90%] mx-auto mb-20 flex flex-col items-center text-white text-center md:flex-row-reverse md:text-left">
      <img src={pp} alt="" className="mb-10 md:w-[600px]" />
      <div>
        <h1
          ref={typewriterRef}
          className="mb-6 font-bold text-4xl md:mb-14 md:text-7xl lg:text-[88px]"
          // on va injecter le texte via typewriter, donc on laisse vide
        ></h1>
        <p className="text-[#D9D9D9] mb-6 w-[90%] md:text-[18px] md:mb-9">
          Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
        </p>
        <a
          href="#"
          className="underline tracking-widest decoration-[#4EE1A0] underline-offset-8 decoration-[2px] font-bold mb-20 hover:text-[#4EE1A0] duration-150"
        >
          CONTACT ME
        </a>
      </div>
    </div>
  );
}
