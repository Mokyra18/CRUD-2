import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema(
    {
        title: String,
        company: String,
        description: String,
        type: String,
        location: String,
        experience: String,
        skills: String,
    }, {
    timestamps: true,
}
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;