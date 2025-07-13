function checkStatus() {
  const id = document.getElementById("grievanceId").value.trim();
  if (!id) {
    alert("Please enter a valid Grievance ID.");
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbziUdSyvSL_AA_moPEE1j82_x18EzF_H-naUsxjQCggMsUAvS9G3EjtSzdbZTbr_0JiSQ/exec", {
    method: "POST",
    body: new URLSearchParams({ id: id })
  })
  .then(res => res.json())
  .then(data => {
    const result = document.getElementById("result");
    if (data.error) {
      result.innerHTML = `<p style="color: red;">❌ ${data.error}</p>`;
    } else {
      result.innerHTML = `
        <p><strong>Status:</strong> ${data.status}</p>
        <p><strong>Admin Response:</strong> ${data.response}</p>
        <p><strong>Submitted At:</strong> ${data.submittedAt}</p>
      `;
    }
  })
  .catch(() => {
    document.getElementById("result").innerHTML = "⚠️ Error retrieving data.";
  });
}
