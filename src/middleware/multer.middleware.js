// // import multer from 'multer';
// // import path from 'path';
// // import fs from 'fs';

// // const userDir = "uploads/user_profiles";
// // const studentDocsDir = "uploads/student_documents"; // New directory

// // // Ensure all directories exist
// // [userDir, studentDocsDir].forEach(dir => {
// //     if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
// // });

// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         const field = file.fieldname;
// //         let dir = userDir;

// //         if (field === 'attachment') { // Added 'attachment'
// //             dir = studentDocsDir;
// //         } else {
// //             dir = userDir;
// //         }
// //         cb(null, dir);
// //     },
// //     filename: (req, file, cb) => {
// //         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
// //         const ext = path.extname(file.originalname);
// //         cb(null, uniqueSuffix + ext);
// //     }
// // });

// // const fileFilter = (req, file, cb) => {
// //     const imageTypes = /jpeg|jpg|png/;
// //     const docTypes = /pdf|doc|docx|xls|xlsx|ppt|pptx|csv|zip/;
// //     const ext = path.extname(file.originalname).toLowerCase().slice(1);
// //     const mime = file.mimetype;

// //     const isImage = imageTypes.test(ext) && mime.startsWith('image/');
// //     const isDoc = docTypes.test(ext);

// //     // List of fields that accept images
// //     const imageFields = ['user_image', 'attachment'];
    
// //     // List of fields that accept documents (Added 'attachment' here)
// //     const docFields = ['file_location', 'attachment'];

// //     if (imageFields.includes(file.fieldname)) {
// //         return isImage ? cb(null, true) : cb(new Error(`Invalid image type for field: ${file.fieldname}`));
// //     } else if (docFields.includes(file.fieldname)) {
// //         // Students documents can be PDFs or images, so let's allow both for 'attachment'
// //         if (file.fieldname === 'attachment') {
// //             return (isDoc || isImage) ? cb(null, true) : cb(new Error("Invalid file type for student document."));
// //         }
// //         return isDoc ? cb(null, true) : cb(new Error(`Invalid document type for field: ${file.fieldname}`));
// //     } else {
// //         return cb(new Error(`Unknown field: ${file.fieldname}`));
// //     }
// // };

// // const upload = multer({ storage, fileFilter });

// // export default upload;










// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';

// const userDir = "uploads/user_profiles";
// const studentDocsDir = "uploads/student_documents";

// // Ensure all directories exist
// [userDir, studentDocsDir].forEach(dir => {
//     if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
// });

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const dir = file.fieldname === 'attachment' ? studentDocsDir : userDir;
//         cb(null, dir);
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//         const ext = path.extname(file.originalname);
//         cb(null, uniqueSuffix + ext);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     const ext = path.extname(file.originalname).toLowerCase();
//     const mime = file.mimetype;

//     // Define allowed types
//     const allowedImages = ['.jpeg', '.jpg', '.png'];
//     const allowedDocs = ['.pdf', '.doc', '.docx', '.xls', '.xlsx'];

//     if (file.fieldname === 'user_image') {
//         if (allowedImages.includes(ext) && mime.startsWith('image/')) {
//             return cb(null, true);
//         }
//         return cb(new Error('User profile must be an image (jpg, jpeg, png)'), false);
//     }

//     if (file.fieldname === 'attachment') {
//         // Attachments (Student Docs) can be images OR documents
//         if (allowedImages.includes(ext) || allowedDocs.includes(ext)) {
//             return cb(null, true);
//         }
//         return cb(new Error('Invalid file type for student document'), false);
//     }

//     cb(new Error(`Unknown field: ${file.fieldname}`), false);
// };

// const upload = multer({ 
//     storage, 
//     fileFilter,
//     limits: {
//         fileSize: 5 * 1024 * 1024, // 1. LIMIT: 5MB per file
//         files: 1 // 2. LIMIT: Only 1 file per request (adjust if needed)
//     }
// });

// export default upload;








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