const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  // Perform validation checks here
  // ...

  // Submit the form data to the server using AJAX
  // ...

  // Show a success message to the user
  alert('Your message has been sent successfully!');

  // Reset the form fields
  form.reset();
});
