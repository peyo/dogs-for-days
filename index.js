'use strict';

function getDogImage() {
  let x = document.getElementById("dogcount").value
  fetch(`https://dog.ceo/api/breeds/image/random/${x}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("Something went wrong. Try again later."));
}

// Replace the existing image with the new one(s).
// Remove hidden and display the results section.
function displayResults(responseJson) {
  console.log(responseJson);
  $(".results-img").html("");
  for(let i=0; i<responseJson.message.length; i++)
  {
    $(".results-img").append(
      `<img src="${responseJson.message[i]}" class="results-img">`
    );
    $(".results").removeClass("hidden");
  }
}

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    let x = document.getElementById("dogcount").value
    if (x === "") {
      alert("Enter a number, dog lover!");
    } else {
      getDogImage();
    }
  });
}

$(watchForm);