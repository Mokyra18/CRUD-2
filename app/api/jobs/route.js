import connectMongoDB from "@/libs/mongodb";
import Job from "@/models/job";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, company, description, type, location, experience, skills } = await request.json();
    await connectMongoDB();
    await Job.create({ title, company, description, type, location, experience, skills });
    return NextResponse.json({ message: "Job Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const jobs = await Job.find();
    return NextResponse.json({ jobs });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Job.findByIdAndDelete(id);
    return NextResponse.json({ message: "Jobs Deleted" }, { status: 200 });
}
