const ages1 = [12,13,11,14];
const ages2 = [20,19,22,24,21];
const ages3 = [52,61,58,64];

const allAges = ages1.concat(ages2).concat([18]).concat(ages3);
console.log(allAges);

//spread operator ...
const allAges2 = [...ages1, ...ages2, 5, ...ages3];
console.log(allAges2);

//Find maximum in arrays
const maximum = Math.max(...allAges);
console.log("Maximum Age is ",maximum);