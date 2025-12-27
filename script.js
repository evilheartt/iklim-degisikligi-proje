// 🌙 Tema
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// 💡 Günlük İpucu
const tips = [
    "Gereksiz ışıkları kapat.",
    "Toplu taşıma kullan.",
    "Plastik tüketimini azalt.",
    "Su tasarrufu yap.",
    "Geri dönüşüme dikkat et."
];
document.getElementById("dailyTip").innerText =
    tips[Math.floor(Math.random() * tips.length)];

// ✅ Günlük Görev
const tasks = [
    "Bez çanta kullan.",
    "Kısa mesafede yürüyüş yap.",
    "Elektronik aletleri prizden çek.",
    "Bir fidan dik."
];
document.getElementById("dailyTask").innerText =
    tasks[Math.floor(Math.random() * tasks.length)];

// 🧮 Karbon Hesaplama
function calculateCarbon() {
    const km = document.getElementById("carbonInput").value;
    const result = km * 0.21;
    document.getElementById("carbonResult").innerText =
        `Tahmini CO₂ salımı: ${result.toFixed(2)} kg`;
}

// 🗳 Anket
function vote(option) {
    document.getElementById("voteResult").innerText =
        `Seçimin: ${option}`;
}

// 👁️ Sayaç
let count = localStorage.getItem("counter") || 0;
count++;
localStorage.setItem("counter", count);
document.getElementById("counter").innerText = count;

// 🗺 Harita
const cities = [
    { name: "İstanbul", lat: 41.0082, lon: 28.9784 },
    { name: "Ankara", lat: 39.9334, lon: 32.8597 },
    { name: "İzmir", lat: 38.4237, lon: 27.1428 },
    { name: "Adana", lat: 37.0000, lon: 35.3213 },
    { name: "Bursa", lat: 40.1950, lon: 29.0600 }
];

const today = new Date().getDate();
const selectedCity = cities[today % cities.length];

const map = L.map("map").setView(
    [selectedCity.lat, selectedCity.lon], 6
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
}).addTo(map);

L.marker([selectedCity.lat, selectedCity.lon])
    .addTo(map)
    .bindPopup(`🔥 Bugün öne çıkan şehir: <b>${selectedCity.name}</b>`)
    .openPopup();

document.getElementById("cityInfo").innerText =
    `Bugün küresel ısınmaya etkisi yüksek olduğu varsayılan şehir: ${selectedCity.name}`;
