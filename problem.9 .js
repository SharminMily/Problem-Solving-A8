/* -Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order. */
const students = [
  { name: "Alina", grades: [85, 90, 78] },
  { name: "Billah", grades: [92, 88, 95] },
  { name: "Jihan", grades: [70, 75, 72] },
  { name: "Diana", grades: [88, 85, 91] }
];

function sortByAverageGrade(studentsArray) {
  return studentsArray.sort((a, b) => {
    const avgA = a.grades.reduce((sum, g) => sum + g, 0) / a.grades.length;
    const avgB = b.grades.reduce((sum, g) => sum + g, 0) / b.grades.length;
    return avgB - avgA; 
  });
}

const sortedStudents = sortByAverageGrade(students);
// console.log(sortedStudents);
