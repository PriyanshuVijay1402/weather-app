const API_BASE = "http://localhost:5000/api/weather";

document.getElementById("weatherForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ location, startDate, endDate }),
  });

  if (res.ok) {
    loadRecords();
    document.getElementById("weatherForm").reset();
  } else {
    alert("Error fetching weather data");
  }
});

async function loadRecords() {
  const res = await fetch(API_BASE);
  const data = await res.json();

  const container = document.getElementById("records");
  container.innerHTML = "";

  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = "record";

    div.innerHTML = `
      <strong>${item.location}</strong><br>
      ${item.startDate} to ${item.endDate}<br>
      <button onclick="deleteRecord('${item._id}')">Delete</button>
    `;

    container.appendChild(div);
  });
}

async function deleteRecord(id) {
  await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
  loadRecords();
}

loadRecords();
