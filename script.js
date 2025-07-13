document.getElementById("grievanceForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    grievance: form.grievance.value
  };

  fetch(https://script.google.com/macros/s/AKfycbzV1T8BlhJel2eDMF_sREZQAUxnnkR4nRPUT-5QUI4bsdkXKEsAdaMcT-IRA_u-wWjWdA/exec, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (res.ok) {
      document.getElementById("statusMsg").innerText = "Submitted successfully ✅";
      form.reset();
    } else {
      document.getElementById("statusMsg").innerText = "Error! Try again ❌";
    }
  });
});
