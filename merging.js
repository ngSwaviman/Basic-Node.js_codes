let obj1 = {a:1, b:2}, obj2 = {b:2, c:3}, obj3 = {c:5, d:6};
let merged = {...obj1, ...obj2, ...obj3};
merged.e = merged.a;
console.log(merged);