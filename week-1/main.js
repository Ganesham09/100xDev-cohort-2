const allUsers = [
  {
    firstName: "Ganesham",
    gender: "Male",
  },
  {
    firstName: "gandu",
    gender: "Male",
  },
  {
    firstName: "roshni",
    gender: "female",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] === "Male") {
    console.log(allUsers[i]["firstName"]);
  }
}
