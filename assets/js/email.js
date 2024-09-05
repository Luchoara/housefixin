document
.getElementById("contact-form")
.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío predeterminado del formulario

  // Aquí obtendrás los valores de los campos del formulario
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const service_type = document.getElementById("service_type").value;
  const leadid_token = document.getElementById("leadid_token").value;

  // Configuración del template params para EmailJS
  const templateParams = {
    name: name,
    email: email,
    phone: phone,
    service_type: service_type,
    leadid_token:leadid_token,
  };

  // Enviar email usando EmailJS
  emailjs.send("service_5pf0e4k", "template_pr0w2se", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Sent!");
      document.getElementById("contact-form").reset(); // Limpiar el formulario
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Something wrong happend!");;
    }
  );
});
