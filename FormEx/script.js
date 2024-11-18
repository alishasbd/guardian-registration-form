document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const guardianName = document.getElementById("guardianName").value;
    const childName = document.getElementById("childName").value;

    if (guardianName === "" || childName === "") {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
      this.reset(); // Reset the form after submission
    }
  });
