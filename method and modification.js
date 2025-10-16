const student = {
  name: "Swaviman",
  age: 20,
  course: "B.Tech",
  college: "Nalanda Institute of Technology"
};

console.log("Before modification:", student);


student.age = 21; 
student.course = "Computer Science"; 

console.log("After modification:", student);


const updatedStudent = {
  ...student,         
  grade: "A"          
};

console.log("After adding new property using spread operator:", updatedStudent);
