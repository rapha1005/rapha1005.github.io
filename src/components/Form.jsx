
export default function component(){
    return (
        <form className="text-center">
        <h2 className="text-white font-bold text-4xl mb-5">Contact</h2>
        <legend className="text-[#D9D9D9] mb-12">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </legend>

        <div>
          <span className="sr-only">Name</span>
          <input className="input" type="text" placeholder="name" />
        </div>
        <div>
          <span className="sr-only">EMAIL</span>
          <input className="input" type="text" placeholder="EMAIL" />
        </div>
        <div>
          <span className="sr-only">MESSAGE</span>
          <textarea className="input" type="text" placeholder="MESSAGE" />
        </div>

        <button
          type="submit"
          className="text-white tracking-widest underline decoration-[#4EE1A0] underline-offset-8 decoration-[2px] font-bold mb-20">
          SEND MESSAGE
        </button>
      </form>
    )
}