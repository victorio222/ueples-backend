import multer from 'multer';
import path from 'path';
import fs from 'fs'

const userDir = "uploads/user_profiles";
const idDir = "uploads/id_cards";

[userDir, idDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const field = file.fieldname;
        const dir = field === 'id_card' ? idDir : userDir;
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueSuffix + ext);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mime = allowedTypes.test(file.mimetype);

    if (ext && mime) {
        cb(null, true);
    } else {
        cb(new Error('Only images (jpeg, jpg, png) are allowed.'))
    }
};

const upload = multer({ storage, fileFilter });

export default upload;