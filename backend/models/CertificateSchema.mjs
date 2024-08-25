import mongoose from "mongoose";
const CertificateSchema = new mongoose.Schema({
    name : String,
    issueDate: Date,
    course: String,
    grade: String
},{timestamps: true});
export default mongoose.model("Certificates",CertificateSchema);