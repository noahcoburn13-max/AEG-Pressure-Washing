document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const d = new FormData(e.currentTarget);
  const subject = encodeURIComponent("AEG Pressure Washing — Free Quote Request");
  const body = encodeURIComponent(
`Name: ${d.get("name")}
Phone: ${d.get("phone")}
Email: ${d.get("email") || "Not provided"}
Service: ${d.get("service")}
Property / Address: ${d.get("address") || "Not provided"}

Job details:
${d.get("message")}`
  );
  window.location.href = `mailto:aegpressurewashing@gmail.com?subject=${subject}&body=${body}`;
});
