import DocumentType from "../models/documentType.model.js";

const seedDocumentTypes = async () => {
  const types = [
    { name: "Form 137" },
    { name: "Form 138" },
    { name: "Birth Certificate" },
  ];

  try {
    for (const docType of types) {
      // Using findOrCreate ensures we don't get 'Duplicate Entry' errors
      await DocumentType.findOrCreate({
        where: { name: docType.name },
        defaults: docType
      });
    }
    console.log("✅ Document Types (Form 137, 138, etc.) seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding Document Types:", error);
  }
};

export default seedDocumentTypes;