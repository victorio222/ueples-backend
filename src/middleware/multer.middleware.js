import multer from 'multer';
import path from 'path';
import fs from 'fs'

const userDir = "uploads/user_profiles";
const idDir = "uploads/id_cards";
const reportDir = "uploads/reports";

[userDir, idDir, reportDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const field = file.fieldname;
        // const dir = field === 'id_card' ? idDir : userDir;
        let dir = userDir;
        if (field === 'id_card') {
            dir = idDir;
        } else if (field === 'file_location') {
            dir = reportDir;
        } else {
            dir = userDir;
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueSuffix + ext);
    }
});

const fileFilter = (req, file, cb) => {
    const imageTypes = /jpeg|jpg|png/;
    const docTypes = /pdf|doc|docx|xls|xlsx|ppt|pptx|csv|zip/;
    const ext = path.extname(file.originalname).toLowerCase().slice(1); // remove dot
    const mime = file.mimetype;

    const isImage = imageTypes.test(ext) && mime.startsWith('image/');
    const isDoc = docTypes.test(ext);

    if (file.fieldname === 'user_image' || file.fieldname === 'id_card') {
        return isImage ? cb(null, true) : cb(new Error(`Invalid image type for field: ${file.fieldname}`));
    } else if (file.fieldname === 'file_location') {
        return isDoc ? cb(null, true) : cb(new Error(`Invalid document type for field: ${file.fieldname}`));
    } else {
        return cb(new Error(`Unknown field: ${file.fieldname}`));
    }
};


const upload = multer({ storage, fileFilter });

export default upload;