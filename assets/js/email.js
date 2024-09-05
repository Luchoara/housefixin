document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Capture form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const service_type = document.getElementById("service_type").value;
  const leadid_token = document.getElementById("leadid_token").value;

  // EmailJS template parameters
  const templateParams = {
    name: name,
    email: email,
    phone: phone,
    service_type: service_type,
    leadid_token: leadid_token, // Capture Jornaya lead ID
  };

  // Send email via EmailJS
  emailjs.send("service_5pf0e4k", "template_pr0w2se", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Form submitted successfully!");
      document.getElementById("contact-form").reset(); // Reset form
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Submission failed, please try again.");
    }
  );
});
