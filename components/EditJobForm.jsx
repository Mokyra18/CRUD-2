'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditJobForm({ id, title, company, description, type, location, experience, skills }) {

    const [newTitle, setNewTitle] = useState(title);
    const [newCompany, setNewCompany] = useState(company);
    const [newDescription, setNewDescription] = useState(description);
    const [newType, setNewType] = useState(type);
    const [newLocation, setNewLocation] = useState(location);
    const [newExperience, setNewExperience] = useState(experience);
    const [newSkills, setNewSkills] = useState(skills);

    const router = useRouter();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
                method:"PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({newTitle,newCompany,newDescription,newType,newLocation,newExperience,newSkills})
            }); 

            if (!res.ok) {
                throw new Error("Failed to Update Job");
            }
            router.refresh();
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
                onChange={e => setNewTitle(e.target.value)}
                value={newTitle}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Job Title"
            />
            <input 
                onChange={e => setNewCompany(e.target.value)}
                value={newCompany}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Company"
            />
            <input 
                onChange={e => setNewDescription(e.target.value)}
                value={newDescription}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Job Description"
            />
            <input
            onChange={e => setNewType(e.target.value)}
            value={newType}    
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Job Type"
            />
            <input 
                onChange={e => setNewLocation(e.target.value)}
                value={newLocation}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Job Location"
            />
            <input 
                onChange={e => setNewExperience(e.target.value)}
                value={newExperience}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Job Experience"
            />
            <input 
                onChange={e => setNewSkills(e.target.value)}
                value={newSkills}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Job Skills"
            />
            
            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Job</button>
        </form>
    )
}
