document.addEventListener("DOMContentLoaded", function () {

  // 🌙 Dark Mode
  const toggleBtn = document.getElementById("themeToggle");
  toggleBtn.onclick = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "darkMode",
      document.documentElement.classList.contains("dark") ? "on" : "off"
    );
  };

  // 🎨 Tema Renkleri
  window.setColor = function (color) {
    let value = "#2e8b57";
    if (color === "blue") value = "#1e90ff";
    if (color === "purple") value = "#8a2be2";
    document.documentElement.style.setProperty("--main-color", value);
    localStorage.setItem("themeColor", value);
  };

  // 👤 İsim
  const welcome = document.getElementById("welcome");
  window.saveName = function () {
    const name = document.getElementById("nameInput").value;
    localStorage.setItem("userName", name);
    welcome.innerText = "Hoş geldin " + name;
  };
  const savedName = localStorage.getItem("userName");
  if (savedName) welcome.innerText = "Hoş geldin " + savedName;

  // 👁️ Ziyaretçi Sayacı
  let count = Number(localStorage.getItem("counter") || 0);
  count++;
  localStorage.setItem("counter", count);
  document.getElementById("counter").innerText = count;

  // 🧮 Karbon Hesaplayıcı
  window.calculateCarbon = function () {
    const km = Number(document.getElementById("km").value) * 0.21 * 365;
    const elec = Number(document.getElementById("electric").value) * 0.43 * 12;
    const total = (km + elec).toFixed(2);
    const trees = Math.ceil(total / 22);

    document.getElementById("carbonResult").innerText =
      `Yıllık CO₂: ${total} kg — ${trees} ağaç gerekir`;

    const c = document.getElementById("chart");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = "green";
    ctx.fillRect(50, c.height - km / 15, 50, km / 15);
    ctx.fillStyle = "blue";
    ctx.fillRect(150, c.height - elec / 15, 50, elec / 15);
  };

  // 🗺 Harita
  const cities = [
    { name: "İstanbul", lat: 41.01, lon: 28.97, carbon: 120 },
    { name: "Ankara", lat: 39.93, lon: 32.86, carbon: 90 },
    { name: "İzmir", lat: 38.42, lon: 27.14, carbon: 80 },
    { name: "Adana", lat: 37.0, lon: 35.32, carbon: 70 }
  ];

  const map = L.map("map").setView([39, 35], 6);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  cities.forEach(c =>
    L.marker([c.lat, c.lon]).addTo(map)
      .bindPopup(`${c.name}<br>Karbon: ${c.carbon}`)
  );

  const city = cities[new Date().getDate() % cities.length];
  document.getElementById("cityInfo").innerText =
    "Bugün öne çıkan şehir: " + city.name;
});

