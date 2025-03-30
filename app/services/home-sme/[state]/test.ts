const data = {
  boy: {
    name: "lateef",
    age: 18,
    gender: "male",
    hobbies: ["reading", "painting"],
    friends: [
      { name: "mohammad", age: 23, gender: "male" },
      { name: "ali", age: 22, gender: "male" },
    ],
  },
  girl: {
    name: "nada",
    age: 17,
    gender: "female",
    hobbies: ["cooking", "dancing"],
    friends: [
      { name: "mahmood", age: 24, gender: "male" },
      { name: "sara", age: 25, gender: "female" },
    ],
  },
};
const test = "boy";

console.log(data[test]);
console.log();
