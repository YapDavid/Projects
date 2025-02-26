const StudentId = [
    {
        Name: "Bogart",
        IDnum: 145796,
        Year: 2021,
        Grade: 85,
    },
    {
        Name: "Sarah",
        IDnum: 582493,
        Year: 2022,
        Grade: 90,
    },
    {
        Name: "Jason",
        IDnum: 239581,
        Year: 2020,
        Grade: 78,
    },
    {
        Name: "Emily",
        IDnum: 984657,
        Year: 2023,
        Grade: 92,
    },
    {
        Name: "David",
        IDnum: 347509,
        Year: 2021,
        Grade: 88,
    },
    {
        Name: "Olivia",
        IDnum: 765432,
        Year: 2020,
        Grade: 79,
    },
    {
        Name: "Ethan",
        IDnum: 564320,
        Year: 2022,
        Grade: 84,
    },
    {
        Name: "Sophia",
        IDnum: 879654,
        Year: 2023,
        Grade: 93,
    },
    {
        Name: "Liam",
        IDnum: 420365,
        Year: 2021,
        Grade: 77,
    },
    {
        Name: "Ava",
        IDnum: 312490,
        Year: 2020,
        Grade: 91,
    },
    {
        Name: "Mason",
        IDnum: 908172,
        Year: 2023,
        Grade: 86,
    },
    {
        Name: "Isabella",
        IDnum: 631257,
        Year: 2022,
        Grade: 95,
    }
];


function getHighestGrade(students) {
    let highestGradeStudent = students[0]; 
    for (let i = 1; i < students.length; i++) {
        if (students[i].Grade > highestGradeStudent.Grade) {
            highestGradeStudent = students[i]; 
        }
    }
    
    return highestGradeStudent;
}


function getLowestGrade(students) {
    let lowestGradeStudent = students[0]; 
    
    for (let i = 1; i < students.length; i++) {
        if (students[i].Grade < lowestGradeStudent.Grade) {
            lowestGradeStudent = students[i]; 
        }
    }
    
    return lowestGradeStudent;
}


const highest = getHighestGrade(StudentId);
const lowest = getLowestGrade(StudentId);


console.log("Highest Grade:");
console.log("Name: " + highest.Name + ", Grade: " + highest.Grade);

console.log("Lowest Grade:");
console.log("Name: " + lowest.Name + ", Grade: " + lowest.Grade);
