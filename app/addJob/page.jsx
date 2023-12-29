"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddJob() {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    const [experience, setExperience] = useState("");
    const [skills, setSkills] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !company || !description || !type || !location || !experience || !skills) {
            alert('Field Required');
            return;
        }

        try {
            const res = await fetch('/api/jobs', {
                method: "POST",
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify({title,company,description,type,location,experience,skills}),
            });

            if (res.ok) {
                router.refresh();
                router.push('/');
            } else {
                throw new Error('Failed to Created a Job');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Job Title"
            />
            <input 
                onChange={(e) => setCompany(e.target.value)}
                value={company}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Company"
            />
            <input 
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Job Description"
            />
            <input 
                onChange={(e) => setType(e.target.value)}
                value={type}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Job Type"
            />
            <input 
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Job Location"
            />
            <input 
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Job Experience"
            />
            <input 
                onChange={(e) => setSkills(e.target.value)}
                value={skills}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Job Skills"
            />
            
            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Job</button>
        </form>
    )
}
