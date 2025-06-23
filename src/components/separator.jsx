

export default function component({ shouldHidden }){
    return (
        <hr className={`w-[90%] h-[1px] mx-auto bg-white border-0 rounded-sm ${shouldHidden ? "md:hidden" : ""}`} />
    )
}