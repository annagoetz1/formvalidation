document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior


  let valid = true;
  
    // Name validation
const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');
if (nameInput.value.trim() === "") {
  nameError.style.display = 'block'; // Show error if name is empty
  valid = false; // Set valid to false because the form has an error
} else {
  nameError.style.display = 'none'; // Hide error if the name is valid
}