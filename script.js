document.getElementById("grievanceForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    grievance: form.grievance.value
  };

  fetch(https://script.google.com/macros/s/AKfycbxRP_bcTNmxjrpuXUs94bwK4PTrPUQUDU8cJ86mUbrv0OWxB-TnaifIQ6TNjRGDGOs4TQ/exec, {
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
