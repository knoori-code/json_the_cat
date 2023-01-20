const request = require('request');



const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      // print out error if no data provided
      return console.log("Error: ", error); // Print the error if one occurred
    }
    const catJson = JSON.parse(body)
    if (catJson.length === 0) {
      return console.log("This cat information does not exist")
    }
    if (catJson) {
      // If data provided, print out JSON data
      console.log("String", catJson[0])
    }

  });

}

module.exports = { fetchBreedDescription };