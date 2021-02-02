const filterByLocation = (array, location) => {
  //Make input case insensitive
  const regex = new RegExp(location, "i");
  let expectedNames = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].location.match(regex)) {
      expectedNames.push(array[i].name);
    }
  }
  //Convert the array to a string and replace the comma with a new line
  return expectedNames.join().replace(",", "\n");
};
module.exports = filterByLocation;
