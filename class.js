class Student{
    constructor(sId,sName)
    {
        this.id = sId;
        this.name = sName;
        this.grade = 9;
    }
}

const student1 = new Student(1,"Xacob");
const student2 = new Student(2,"Yolo");

console.log(student1,student2);

console.log(`Student1 Name: ${student1.name}
Student2 Name: ${student2.name}`);