let str = "Pakistan is a islamic country 95 % Muslims 5 others lived in Pakistan.";
let words = str.split(/\s/);
let regex = /\d+/g;
let numbers = str.match(regex);

for (let i = 0; i < numbers.length; i++) {
  let index = words.indexOf(numbers[i]);
  
  let prevWord = words[index - 1 ];
  let nextWord = words[index + 1];
  
  console.log("Number: " + numbers[i]);
  console.log("Index: " + index);
  console.log("Previous word: " + prevWord);
  console.log("Next word: " + nextWord);
  console.log("");
}