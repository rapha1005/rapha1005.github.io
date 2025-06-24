import Icon from './SocialIcon'

const list = [
  {
    alt: "github",
    icon: "/images/github.svg",
    link: "https://github.com/rapha1004",
  },
  {
    alt: "x",
    icon: "/images/x.svg",
    link: "https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1",
  },
  {
    alt: "linkedin",
    icon: "/images/linkedin.svg",
    link: "https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1",
  },
];

export default function component() {
  return (
    <div className="flex gap-6 items-center">
      {list.map((item, index) => (
        <Icon key={item.alt} href={item.link} src={item.icon} alt={item.alt}/>
      ))}
    </div>
  );
}
