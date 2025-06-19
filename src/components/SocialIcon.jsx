

export default function component({link, icon, alt, src}){

    console.log("====")
    console.log(src)
    console.log("====")

    return (
        <a href={link} target="_blank">
        <img src={src} alt={alt} />
      </a>
    )
}