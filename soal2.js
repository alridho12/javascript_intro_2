const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];
let validInput = (input, limit) => {
  if (typeof input !== "string") throw "Input bukan string";
  if (typeof limit !== "number") throw "limit harus number";
  if (!input) throw "Masukkan input";
};
let searchName = (input, limit, callback) => {
  
  try {
    validInput(input, limit);
    const filterName = name.filter((name) =>
      name.toLowerCase().includes(input.toLowerCase())
    );
    const slicedNames = filterName.slice(0, limit);
    callback(slicedNames);
  } catch (err) {
    console.log(err);
  }
};

function callback(result) {
  console.log(result);
}

searchName("an", 3, callback);
searchName(2, 3, callback);
searchName("", 3, callback);
searchName("an", " 3", callback);
