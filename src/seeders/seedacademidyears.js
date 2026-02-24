import AcademicYear from "../models/academicYear.model.js";

const seedAcademicYears = async () => {
  const years = [];
  const startYear = 1960;
  const endYear = 2026;

  // Generate the academic year strings dynamically
  for (let year = startYear; year < endYear; year++) {
    years.push({
      academic_year: `${year}-${year + 1}`
    });
  }

  try {
    for (const ay of years) {
      // findOrCreate prevents duplicates if you restart the server
      await AcademicYear.findOrCreate({
        where: { academic_year: ay.academic_year },
        defaults: ay
      });
    }
    console.log(`✅ Academic Years from ${startYear} to ${endYear} seeded!`);
  } catch (error) {
    console.error("❌ Error seeding Academic Years:", error);
  }
};

export default seedAcademicYears;