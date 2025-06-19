import Separator from "./separator"
import Form from "./Form"
import Social from "./SocialLink"
export default function component() {
  return (
    <footer className="p-3.5 pt-14 bg-[#242424]">
      <Form />
      <Separator />
      <div>
      <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1" className="text-white text-2xl font-bold mb-5 ">rapha1004</a>
      <Social />
      </div>
    </footer>
  );
}
