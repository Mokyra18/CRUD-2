import EditJobForm from "@/components/EditJobForm";

const getJobById = async (id) => {
    const apiUrl = process.env.API_URL;
    try {
        const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
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
