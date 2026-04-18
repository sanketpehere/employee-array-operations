/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  // using map
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  // using forEach
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  // adding new employee
  let newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };

  arr.push(newEmployee);

  console.log(arr);
}

function removeAdmin() {
  // remove admin using filter
  arr = arr.filter((employee) => employee.profession !== "admin");

  console.log(arr);
}

function concatenateArray() {
  // new array with 3 different objects
  let newArr = [
    { id: 5, name: "alex", age: "22", profession: "designer" },
    { id: 6, name: "emma", age: "24", profession: "tester" },
    { id: 7, name: "mike", age: "23", profession: "manager" },
  ];

  // concatenate arrays
  let combinedArray = arr.concat(newArr);

  console.log(combinedArray);
}
