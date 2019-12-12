'use strict';

function getDogImage() {
  let x = document.getElementById("dogcount").value
  fetch(`https://dog.ceo/api/breeds/image/random/${x}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  // replace the existing image with the new one(s)
  for(let i=0; i<responseJson.message.length; i++)
  {
    $(".results-img").append(
      `<img src="${responseJson.message[i]}" class="results-img">`
    );
    // remove hidden and display the results section
    $(".results").removeClass("hidden");
  }
}

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});