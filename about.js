// Function to handle form submission
function handleSubmit(event) {
  // Get the selected value (yes or no)
  const alignmentValue = document.querySelector(
    'input[name="alignment"]:checked'
  );

  if (!alignmentValue) {
    event.preventDefault();
    alert("Please select 'Yes' or 'No' to align with our mission.");
  }

  // You can perform further actions based on the selected value here.
  if (alignmentValue.value === "yes") {
    alert("Thank you for wanting to help save our oceans!");
  } else if (alignmentValue.value === "no") {
    alert("We appreciate your honesty.");
  }
}

// Add an event listener to the form for submission
const missionForm = document.getElementById("mission-form");
missionForm.addEventListener("submit", handleSubmit);
