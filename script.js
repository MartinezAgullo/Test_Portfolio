function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    // Create a new 'recommendation' element and set its value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 

    // Call showPopup here with the confirmation message
    showPopup(true, "Thank you for your recommendation! It has been added.");

    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool, message) {
  var popup = document.getElementById('popup');
  if (bool) {
    // Update the inner HTML of the popup's message container
    popup.getElementsByTagName('h3')[0].innerHTML = message;
    popup.style.visibility = 'visible';
  } else {
    popup.style.visibility = 'hidden';
  }
}
