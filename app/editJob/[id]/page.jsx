import EditJobForm from "@/components/EditJobForm";

const getJobById = async (id) => {
    try {
        const res = await fetch(`https://crud-2-mongo.vercel.app/api/jobs/${id}`, {
            cache:
                'no-store'
        });

        if (!res.ok) {
            throw new Error("Failed to fecth Job");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditJob({params}) {
    const { id } = params;
    const { job } = await getJobById(id);
    const { title, company, description, type, location, experience, skills } = job;
    return <EditJobForm id={id} title={title} company={company} description={description} type={type} location={location} experience={experience} skills={skills} />;
    
}
