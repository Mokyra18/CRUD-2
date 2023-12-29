import connectMongoDB from "@/libs/mongodb";
import Job from "@/models/job";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newCompany: company, newDescription: description, newType: type,
        newLocation: location, newExperience: experience, newSkills: skills } = await request.json();
    await connectMongoDB();
    await Job.findByIdAndUpdate(id, { title, company, description, type, location, experience, skills });
    return NextResponse.json({ message: "Job Edited" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const job = await Job.findOne({ _id: id });
    return NextResponse.json({ job }, { status: 200 });
}