import Link from "next/link";
import Removebtn from "./Removebtn";
import { HiPencilAlt } from "react-icons/hi";

const getJobs = async () => {
    try {
        const res = await fetch(`https://crud-2-mongo.vercel.app/api/jobs`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("failed to fetch jobs")
        };
        return res.json();
    } catch (error) {
        console.log("Error Loading Jobs", error);
    }
};


export default async function List() {  
    const { jobs } = await getJobs() || { jobs: [] };


    return (
        <>
            {jobs.map((t) => (
                <div key={t.id}className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">{t.title} - {t.company}</h2>
                    <div>{t.description} - {t.type} - {t.location} - {t.experience} - {t.skills}</div>
                </div>

                <div className="flex gap-2">
                    <Removebtn id={t._id} />
                    <Link href={`/editJob/${t._id}`}>
                        <HiPencilAlt size={24}/>
                    </Link>
                </div>
                </div>
            ))}
        </>        
    )
}
