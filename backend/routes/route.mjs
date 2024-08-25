import express  from "express";
import { addCertificate , editCertificate, deleteCertificate , getAllCertificates } from "../controller/CertificateController.mjs";
const router = express.Router();

router.post("/addCertificate",addCertificate)
router.post('/editCertificate',editCertificate)
router.post('/delete',deleteCertificate);
router.get('/getall', getAllCertificates);

export default router;