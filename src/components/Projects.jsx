import { useEffect, useState } from "react";
import Project from "./Project";

export default function component() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/src/data/work.json");
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
        <h2 className="text-white font-bold text-5xl mb-10">Projects</h2>
      {data && data.length ? (
        <ul>
          {data.map((project, index) => (
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
