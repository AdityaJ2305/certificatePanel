import Certificates from "../models/CertificateSchema.mjs";

const addCertificate = async (req,res)=>{
    const data = req.body;
    const newCertificate = new Certificates(data);
    await newCertificate.save();
    return res.send({status:'ok' , message : newCertificate})
}
const editCertificate = async (req,res)=>{
    const data = req.body;
    const updateCertificate = await Certificates.updateOne({"name": data.name},{$set:{'grade': data.grade, 'issueDate': data.issueDate}})
    return res.send({status:true,message:updateCertificate})
}
const deleteCertificate = async (req, res) => {
    const { name } = req.body;
  
    try {
      // Delete the certificate based on the name
      const result = await Certificates.deleteOne({ name });
  
      if (result.deletedCount > 0) {
        return res.send({ status: true, message: 'Certificate deleted successfully' });
      } else {
        return res.status(404).send({ status: false, message: 'Certificate not found' });
      }
    } catch (error) {
      console.error('Error deleting certificate:', error);
      return res.status(500).send({ status: false, message: 'Internal Server Error' });
    }
  };

const getAllCertificates = async(req,res)=>{
    const certificates = await Certificates.find();
    return res.send({status:true, message: certificates});
}
export {addCertificate, editCertificate, deleteCertificate, getAllCertificates};