import { Link } from "react-router-dom";

export default function Header({ name, newTitle, length, additionalRoute }: { name: string, newTitle?: string, length?: number, additionalRoute?: string | null }) {
    return (
        <div className="border-2 p-6 rounded-lg  flex flex-row h-[150px] overflow-hidden items-center">
            <div className=" w-[100%] flex flex-col gap-4">
                <span className="text-4xl font-bold">{`${name} ${length ? `(${length})` : ''}`}</span>
                <span className="flex flex-row gap-2">
                    <img src="/home-01.svg" alt="Home Icon" className="w-[15px]" />
                    <span>{`/`}</span>
                    <span>{name}</span>
                </span>
            </div>
            {newTitle &&
                <Link to={additionalRoute ? additionalRoute : 'add'}
                    className="min-w-[130px] bg-black text-white px-3 py-1.5 rounded-full">
                    Add New {newTitle}
                </Link>
            }
        </div>
    )
}
