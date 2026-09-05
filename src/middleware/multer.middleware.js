import multer from 'multer';
import path from 'path';
import fs from 'fs';

const userDir = "uploads/user_profiles";
const studentDocsDir = "uploads/student_documents";

// Ensure directories exist
[userDir, studentDocsDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Excel files don't usually need to be saved to disk if you're using req.file.buffer
        // but if your router isn't using memoryStorage, multer needs a place to put it.
        const dir = file.fieldname === 'attachment' ? studentDocsDir : userDir;
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueSuffix + ext);
    }
});

const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    
    // 1. Handle Excel Imports (New Field)
    if (file.fieldname === 'excel_file') {
        const allowedExcel = ['.xls', '.xlsx'];
        if (allowedExcel.includes(ext)) {
            return cb(null, true);
        }
        return cb(new Error('Please upload a valid Excel file (.xls or .xlsx)'), false);
    }

    // 2. Handle User Profiles
    if (file.fieldname === 'user_image') {
        const allowedImages = ['.jpeg', '.jpg', '.png'];
        if (allowedImages.includes(ext)) {
            return cb(null, true);
        }
        return cb(new Error('User profile must be an image'), false);
    }

    // 3. Handle Student Document Attachments
    if (file.fieldname === 'attachment' || file.fieldname === 'file_attachment') {
        const allowedDocs = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.jpg', '.jpeg', '.png'];
        if (allowedDocs.includes(ext)) {
            return cb(null, true);
        }
        return cb(new Error('Invalid file type for student document'), false);
    }

    cb(new Error(`Unknown field: ${file.fieldname}`), false);
};

const upload = multer({ 
    storage: storage, // Use diskStorage for images/docs
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }
});

export default upload;