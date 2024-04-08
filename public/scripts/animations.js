// Trigger slide-in animation for form container
const formContainer = document.getElementById('formContainer');
formContainer.classList.add('slide-in-from-top');

// Trigger button animation on hover
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#005580'; /* Darker blue */
});
submitButton.addEventListener('mouseout', function() {
  this.style.backgroundColor = '#0077be'; /* Blue */
});
