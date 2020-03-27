function createUser(name, age=18){
    const user = {};
    user.name = name;
    user.age = age;
    return user;
}

const acc= createUser("Pulok");
console.log(acc);