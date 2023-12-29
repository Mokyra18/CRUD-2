"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function Removebtn({id}) {
    const router = useRouter();
    const removeJob = async () => {
        const confirmed = confirm('Yakin???');

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/jobs?id=${id}`, {
                method: "DELETE"
            });
            if (res.ok) {
                router.refresh();
            }
        }
    };

    return (
        <button onClick={removeJob} className="text-red-400">
            <HiOutlineTrash size={24}/>
        </button> 
    )
}
