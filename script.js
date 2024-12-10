let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let result = create2DArray(); // Caching the array in result for later use.
console.log(result, " 2 d array creation");
function create2DArray() {
  //Part. 2 Expanding Functionality
  let tempString = str.split("\n");
  console.log(tempString);
  let row = tempString.length;
  console.log(row);

  let updateArray = tempString.map((x) => x.split(","));
  //updatedArray is the 2 d array

  console.log(updateArray);
  let col = updateArray[0].length;
  console.log(col);

  //Part. 3 Transforming Data

  let result = [];
  for (let i = 1; i < updateArray.length; i++) {
    let obj = {}; //Declaring an object to be pushed into the array
    for (let j = 0; j < col; j++) {
      let x = updateArray[0][j];

      obj[x.toLowerCase()] = updateArray[i][j]; //
    }
    result.push(obj);
  }
  //console.log(result);
  return result;
}

//Part 4: Sorting and Manipulating Data

//i.Remove the last element from the sorted array.

removeLastElement();

function removeLastElement() {
  console.log(result.pop());
}

//ii.Insert the following object at index 1:

insertAtIndex();

function insertAtIndex() {
  result.splice(1, 0, {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25",
  });
}
//iii.Add the following object to the end of the array:
console.log(result, " Adding at the end");
addToEnd();

function addToEnd() {
  result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
}

//iv.Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

calculateAverageAgeUsingLoops();

function calculateAverageAgeUsingLoops() {
  let avgAge = 0;
  for (let i = 0; i < result.length; i++) {
    avgAge += Number(result[i].age);
  }
  console.log(avgAge / result.length);
}

//Part 5:Full Circle the final set of data back into CSV format.

const csv = convertingDataBackToCSV();
console.log(csv);

function convertingDataBackToCSV() {
  let objKeys = result.map((r) => Object.keys(r));
  //console.log(objKeys);

  let tempKeys = objKeys.map((r) => r.join(","));

  let objVal = result.map((ele) => Object.values(ele));
  //console.log(objVal);
  let tempVal = objVal.map((ele) => ele.join(","));
  //console.log(tempVal[1] + "=========");

  let csv = tempKeys[0] + "\\n";

  for (let i = 0; i < tempVal.length; i++) {
    if (i == tempVal.length - 1) {
      csv += tempVal[i];
    } else {
      csv += tempVal[i] + "\\n";
    }
  }
  return csv;
}
