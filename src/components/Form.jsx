import { useRef } from "react";

export default function component() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    fetch(
      "https://discord.com/api/webhooks/1386706372460286173/08MsSRtQlsKWqfUasJxBG2okBCdOaHf4Yikq2V3IN9r0U8afNyGFsqI45cFRs47DSu23",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `=======================\n name: ${formData.name},\n email: ${formData.email},\n message: ${formData.message}\n =======================
        `,
        }),
      }
    )
    .then(res => {
      if(res.status === 204){
        alert("c'est bon")
      }else{
        console("y a un problème (demande a chatGPT)")
      }
      
    })
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center md:w-[73%] mx-auto lg:flex-row lg:w-[90%] lg:items-start lg:gap-20"
    >
      <div className="text-center lg:text-left flex-1">
        <h2 className="text-white font-bold text-4xl mb-5 md:text-[72px] lg:mb-10">
          Contact
        </h2>
        <legend className="text-[#D9D9D9] mb-12 md:text-[18px]">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </legend>
      </div>

      <div className="flex-1 w-full">
        <div className="w-full mb-6">
          <span className="sr-only">Name</span>
          <input
            className="input w-full"
            type="text"
            placeholder="name"
            ref={nameRef}
            required
          />
        </div>
        <div className="w-full mb-6">
          <span className="sr-only">EMAIL</span>
          <input
            className="input w-full"
            type="text"
            placeholder="EMAIL"
            ref={emailRef}
            required
          />
        </div>
        <div className="w-full mb-12">
          <span className="sr-only">MESSAGE</span>
          <textarea
            className="input w-full min-h-[150px]"
            placeholder="MESSAGE"
            ref={messageRef}
            required
          />
        </div>

        <button
          type="submit"
          className="text-white self-end tracking-widest underline decoration-[#4EE1A0] underline-offset-8 decoration-[2px] font-bold mb-20 hover:text-[#4EE1A0] duration-150 cursor-pointer"
        >
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
}
