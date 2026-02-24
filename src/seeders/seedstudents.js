import Students from "../models/students.model.js";

const seedStudents = async () => {
  const students = [
    { lrn: "123456789011", first_name: "Juan", last_name: "Dela Cruz", middle_name: "Mendoza", gender: "Male", date_of_birth: "2010-05-15" },
    { lrn: "123456789012", first_name: "Maria", last_name: "Clara", middle_name: "Santos", gender: "Female", date_of_birth: "2011-02-20" },
    { lrn: "123456789013", first_name: "Jose", last_name: "Rizal", middle_name: "Protacio", gender: "Male", date_of_birth: "2010-06-19" },
    { lrn: "123456789014", first_name: "Andres", last_name: "Bonifacio", middle_name: "Castro", gender: "Male", date_of_birth: "2009-11-30" },
    { lrn: "123456789015", first_name: "Melchora", last_name: "Aquino", middle_name: "Ramos", gender: "Female", date_of_birth: "2008-01-06" },
    { lrn: "123456789016", first_name: "Emilio", last_name: "Aguinaldo", middle_name: "Famy", gender: "Male", date_of_birth: "2010-03-22" },
    { lrn: "123456789017", first_name: "Gabriela", last_name: "Silang", middle_name: "Cariño", gender: "Female", date_of_birth: "2011-09-15" },
    { lrn: "123456789018", first_name: "Apolinario", last_name: "Mabini", middle_name: "Maranan", gender: "Male", date_of_birth: "2009-07-23" },
    { lrn: "123456789019", first_name: "Teresa", last_name: "Magbanua", middle_name: "Ferraris", gender: "Female", date_of_birth: "2010-10-13" },
    { lrn: "123456789020", first_name: "Juan", last_name: "Luna", middle_name: "Novicio", gender: "Male", date_of_birth: "2008-10-23" },
  ];

  try {
    for (const student of students) {
      await Students.findOrCreate({
        where: { lrn: student.lrn },
        defaults: student
      });
    }
    console.log("✅ 10 Students seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding students:", error);
  }
};

export default seedStudents;