// Get the form element
const form = document.querySelector("form");

// Add event listener to the form submit button
form.addEventListener("submit", (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get the values of the ticket inputs
  const adultTickets = parseInt(document.getElementById("adult").value);
  const childTickets = parseInt(document.getElementById("child").value);
  const seniorTickets = parseInt(document.getElementById("senior").value);

  // Calculate the total cost of tickets
  const totalCost = (adultTickets * 10) + (childTickets * 5) + (seniorTickets * 8);

  // Get the user's personal information
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Display the total cost and personal information in an alert
  alert(`Total Cost: $${totalCost}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);

  // Reset the form inputs
  form.reset();
});
