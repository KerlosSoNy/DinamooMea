import { useEffect, useState } from "react"
import { getTimeOfDay } from "../../util/functions/getTime"

export default function Home() {
    const [time, setTime] = useState<string>()
    useEffect(() => {
        setTime(getTimeOfDay())
    }, [])
    return (
        <div className="w-full h-screen flex flex-col gap-10 items-center justify-center">
            <img src="/dinamo_mea_logo.jpg" alt="Logo" className="rounded-full w-[150px]" />
            <span className="text-3xl font-semibold font-mono">Good {time}, Admin</span>
        </div>
    )
}
