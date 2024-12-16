import { links } from "../../util/constant/links";
import SingleLink from "../singleLink/singleLink";

export default function Sidebar() {
    return (
        <div className="min-w-[250px] h-screen border-e-2 rounded-e-xl">
            <div className="flex flex-col items-center py-10 gap-6">
                <img src="/dinamo_mea_logo.jpg" alt="Logo" className="rounded-full w-[100px]" />
                <h2 className="text-2xl font-bold">Dinamo MEA</h2>
            </div>
            <div className="flex flex-col items-start px-10 gap-4">
                {
                    links.map((link) => (
                        <SingleLink link={link} key={link.title} />
                    ))
                }
            </div>
        </div>
    )
}
