const a = 10;
console.log(a);

//a =3;  can not assign to a const value

let b=10;
b=2;
console.log(b);

// For array you can assign only individual elements of const array, but you can not change the whole array
const c = [10,23,11];
c[1] = 20;
console.log(c);
c.push(19);
console.log(c);

// c= ["fafa",1,"sdsds"]; not possible

for(var i=0;i<4;i++)
{
    console.log("i = ",i);
}
console.log("Var i variable can access from local scope: ",i);

for(let t=10;t<13;t++)
{
    console.log("t = ",t);
}
//console.log(t); can not access from out of local scope