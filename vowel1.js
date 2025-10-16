const name1 = "Swaviman";
const vowels = "aeiouAEIOU";
let rest = [];
for (let i = 0; i < name1.length; i++) {
  if (!vowels.includes(name1[i]) && name1[i] !== " ") {
    rest.push(name1[i]);
  }
}
console.log("Original String:", name1);
console.log("Non-vowel letters:", rest);