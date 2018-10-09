/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath` *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */
 
 /*
 //from previous sprint
 module.exports = {
  getGitHubProfileAsync: getGitHubProfileAsync,
  generateRandomTokenAsync: generateRandomTokenAsync,
  readFileAndMakeItFunnyAsync: readFileAndMakeItFunnyAsync
};
 */

var fs = require('fs');
var Promise = require('bluebird');
var readLine = require('./promiseConstructor.js');
var getProfile = require('./promisification.js')


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  
  
  return readLine.pluckFirstLineFromFileAsync(readFilePath) 
  .then (function(userName) {
    return getProfile.getGitHubProfileAsync(userName)
  })
  .then (function(body) {
    console.log(body)
    return fs.writeFileSync(writeFilePath, JSON.stringify(body))
  })
  // .catch();
  
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
