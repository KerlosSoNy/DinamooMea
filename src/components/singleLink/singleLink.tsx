import { Link, useLocation } from 'react-router-dom'

export default function SingleLink({ link }: Link) {
    const location = useLocation()
    return (
        <Link to={link.url} key={link.title} className={`flex flex-row justify-start py-2 rounded-[1.2rem] px-4 w-full items-center gap-10 ${location.pathname === link.url ? "bg-black text-white" : ""}`}>
            <img src={link.iconSrc} alt={link.title} className="w-[30px]" />
            <span>{link.title}</span>
        </Link>
    )
}
