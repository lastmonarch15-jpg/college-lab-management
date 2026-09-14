let students =
JSON.parse(localStorage.getItem("students")) || [];

function displayStudents(){
    let list =
    document.getElementById("studentList");

    list.innerHTML="";

    students.forEach(student=>{
        list.innerHTML += `<li>${student}</li>`;
    });
}

function addStudent(){
    let name =
    document.getElementById("name").value;

    students.push(name);

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    displayStudents();
}

displayStudents();
