const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let first, last, hobbie, targetAge;

fs.readFile("./firstname.txt", "utf-8")
  .then((firstName) => {
    first = firstName;
    return fs.readFile("./lastname.txt", "utf-8");
  })
  .then((lastName) => {
    last = lastName;
    return fs.readFile("./age.txt", "utf-8");
  })
  .then((age) => {
    targetAge = age;
    return fs.readFile("./hobbies.txt", "utf-8");
  })
  .then((hobbies) => {
    hobbie = hobbies.replace(/\[|\]|"/g, "");
    const hobbyList = hobbie.split(",");

    console.log(
      `${first} ${last} is ${targetAge} years old and his hobbies are ${hobbyList[0]} and ${hobbyList[1]}`
    );
  })
  .catch((error) => {
    console.log("Somethin went wrong.");
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function readDataFile() {
  try {
    const firstName = await fs.readFile("./firstname.txt", "utf-8");
    const lastName = await fs.readFile("./lastname.txt", "utf-8");
    const hobbies = await fs.readFile("./hobbies.txt", "utf-8");
    const age = await fs.readFile("./age.txt", "utf-8");

    const hobbie = hobbies.replace(/\[|\]|"/g, "");
    const hobbyList = hobbie.split(",");
    console.log(
      `${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbyList[0]} and ${hobbyList[1]}`
    );
  } catch {}
}

readDataFile();
