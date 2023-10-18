
let marks = [50,80,90,95,30];
let largest = marks[0];
for (let i = 0; i < (marks.length-1); i++) {
   largest = (marks[i]<marks[i+1]) ? marks[i+1] : marks[i];
}
console.log("The Highest marks of student is "+largest);
