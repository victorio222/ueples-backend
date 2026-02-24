import Documents from "../models/documents.model.js";
import Students from "../models/students.model.js";
import User from "../models/user.model.js";
import AcademicYear from "../models/academicYear.model.js";

const seedDocuments = async () => {
  try {
    // 1. Fetch existing data to get valid foreign keys
    const student = await Students.findOne();
    const user = await User.findOne();
    const year = await AcademicYear.findOne({ where: { academic_year: '2023-2024' } });

    if (!student || !user || !year) {
      console.error("⚠️ Skipping Documents seeding: Students, Users, or Academic Years not found.");
      return;
    }

    const documents = [
      {
        student_id: student.student_id,
        posted_by: user.user_id,
        year_id: year.year_id,
        type: "Form 137",
        attachment: "/uploads/documents/sample-f137.pdf"
      },
      {
        student_id: student.student_id,
        posted_by: user.user_id,
        year_id: year.year_id,
        type: "Good Moral Certificate",
        attachment: "/uploads/documents/sample-good-moral.pdf"
      },
      {
        student_id: student.student_id,
        posted_by: user.user_id,
        year_id: year.year_id,
        type: "Birth Certificate",
        attachment: "/uploads/documents/sample-birth-cert.pdf"
      }
    ];

    for (const doc of documents) {
      // We check by attachment path to avoid duplicates
      await Documents.findOrCreate({
        where: { attachment: doc.attachment },
        defaults: doc
      });
    }

    console.log("✅ Documents seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding Documents:", error);
  }
};

export default seedDocuments;