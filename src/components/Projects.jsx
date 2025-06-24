import { useEffect, useState } from "react";
import Project from "./Project";

export default function component() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/data/work.json");
      const data = await res.json();

      if (data.length) {
        setData(data);
      }  
    }

    getData();
  }, []);

  console.log(data);

  return (
    <section className="pt-20 w-[90%] mx-auto mb-20">
      <div className="flex items-center justify-between mb-10 md:mb-16">
        <h2 className="text-white font-bold text-5xl lg:text-[88px]">Projects</h2>
        <a href="#" className="underline tracking-widest text-white decoration-[#4EE1A0] underline-offset-8 decoration-[2px] font-bold hover:text-[#4EE1A0] duration-150">CONTACT ME</a>
      </div>
      {data && data.length ? (
        <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {data.map((project) => (
            <Project key={project.titregrid}
              link={project.link}
              description={project.descriptiontitre}
              image={project.gridimg}
              name={project.titregrid}
            />
          ))}
        </ul>
      ) : (
        <p>Ca charge !</p>
      )}
    </section>
  );
}
