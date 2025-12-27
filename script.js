document.addEventListener("DOMContentLoaded", function () {

  // 🌙 Dark Mode (Hatırlamalı)
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.onclick = () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "on");
      } else {
        localStorage.setItem("darkMode", "off");
      }
    };
  }

  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark");
  }

  // 🎨 Tema Rengi (Hatırlamalı)
  const savedColor = localStorage.getItem("themeColor");
  if (savedColor) {
    document.documentElement.style.setProperty("--main-color", savedColor);
  }

  window.setColor = function (color) {
    let value = "#2e8b57";
    if (color === "blue") value = "#1e90ff";
    if (color === "purple") value = "#8a2be2";

    document.documentElement.style.setProperty("--main-color", value);
    localStorage.setItem("themeColor", value);
  };

  // 👤 İsim Kaydetme
  const nameInput = document.getElementById("nameInput");
  const welcome = document.getElementById("welcome");

  window.saveName = function () {
    const name = nameInput.value;
    localStorage.setItem("userName", name);
    welcome.innerText = "Hoş geldin " + name;
  };

  const savedName = localStorage.getItem("userName");
  if (savedName) {
    welcome.innerText = "Hoş geldin " + savedName;
  }

  // 👁️ Ziyaretçi Sayacı
  let count = Number(localStorage.getItem("counter") || 0);
  count++;
  localStorage.setItem("counter", count);
  document.getElementById("counter").innerText = count;

  // 🧮 Karbon Ayak İzi Hesabı
  window.calculateCarbon = function () {
    const km = Number(document.getElementById("km").value) * 0.21 * 365;
    const elec = Number(document.getElementById("electric").value) * 0.43 * 12;
    const total = (km + elec).toFixed(2);
    const trees = Math.ceil(total / 22);

    document.getElementById("carbonResult").innerText =
      `Yıllık CO₂: ${total} kg | Dengelenmesi için ${trees} ağaç gerekir`;

    drawChart(km, elec);
  };

  // 📊 Grafik
  function drawChart(km, elec) {
    const c = document.getElementById("chart");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);

    ctx.fillStyle = "green";
    ctx.fillRect(50, c.height - km / 15, 50, km / 15);

    ctx.fillStyle = "blue";
    ctx.fillRect(150, c.height - elec / 15, 50, elec / 15);
  }

  // 🗺 Türkiye Haritası
  const cities = [
    { name: "İstanbul", lat: 41.01, lon: 28.97, carbon: 120 },
    { name: "Ankara", lat: 39.93, lon: 32.86, carbon: 90 },
    { name: "İzmir", lat: 38.42, lon: 27.14, carbon: 80 },
    { name: "Adana", lat: 37.00, lon: 35.32, carbon: 70 },
    { name: "Bursa", lat: 40.20, lon: 29.06, carbon: 75 }
  ];

  const map = L.map("map").setView([39, 35], 6);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  cities.forEach(c => {
    L.marker([c.lat, c.lon])
      .addTo(map)
      .bindPopup(`${c.name}<br>Karbon: ${c.carbon} Mt`);
  });

  const today = new Date().getDate();
  const city = cities[today % cities.length];
  document.getElementById("cityInfo").innerText =
    `Bugün öne çıkan şehir: ${city.name}`;

});
