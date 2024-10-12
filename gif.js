// Define the API URL
const API_KEY = "sfcqhsWRrRtXg40J5N2AKY3eeCCU1sK1";

const outputElement = document.getElementById("setupgif")
// Make a GET request
fetch('https://api.giphy.com/v1/gifs/random?api_key=sfcqhsWRrRtXg40J5N2AKY3eeCCU1sK1&tag=&rating=g')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log("All good")
    return response.json();
  })
  .then(data => {
    gifURL = data.data.images.original.url
    console.log(gifURL);
    outputElement.innerHTML = `<img src="${gifURL}">`;    
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });