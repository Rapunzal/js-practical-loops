let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let tempString = str.split("\n");
console.log(tempString);
let row = tempString.length;
console.log(row);

let updateArray = tempString.map((x) => x.split(","));

console.log(updateArray);
let col = updateArray[0].length;
console.log(col);
//Part. 2
let result = [];
for (let i = 1; i < updateArray.length; i++) {
  let obj = {};
  for (let j = 0; j < col; j++) {
    let x = updateArray[0][j];
    //console.log(x);
    obj[x.toLowerCase()] = updateArray[i][j];
    // console.log(updateArray[i][j]);
    // console.log(obj[x]);
  }
  result.push(obj);
}
console.log(result);
//Part. 3

//i.Remove the last element from the sorted array.

console.log(result.pop());

//ii.Insert the following object at index 1:

result.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});

//iii.Add the following object to the end of the array:

result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(result, " Adding at the end");
//iv.Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
let avgAge = 0;
for (let i = 0; i < result.length; i++) {
  avgAge += Number(result[i].age);
}
console.log(avgAge / result.length);

//Part 5:Full Circle the final set of data back into CSV format.

let objKeys = result.map((r) => Object.keys(r));
console.log(objKeys);
let tempKeys = objKeys.map((r) => r.join(","));

let objVal = result.map((ele) => Object.values(ele));
console.log(objVal);
let tempVal = objVal.map((ele) => ele.join(","));
console.log(tempVal[1] + "=========");

let csv = tempKeys[0] + "\\n";

for (let i = 0; i < tempVal.length - 1; i++) {
  csv += tempVal[i] + "\\n";
}

let q = csv[csv.length - 2];
console.log(csv);
