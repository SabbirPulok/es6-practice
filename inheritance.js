class Parents{
    constructor()
    {
        this.fatherName = "Sanaith";
    }
}
class Child extends Parents
{
    constructor(cName)
    {
        super();
        this.name = cName;
        
    }
    getAllName()
    {
        return `Name: ${this.name} and Father Name: ${this.fatherName}`;
    }
}

const contestant1 = new Child("Pulok");
console.log(contestant1.getAllName());