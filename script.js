// 👤 KULLANICI
let kullanici = localStorage.getItem("kullanici");
if (!kullanici) {
  kullanici = prompt("🌱 İsmini gir:");
  localStorage.setItem("kullanici", kullanici);
}
document.querySelector("header p").textContent =
  `Hoş geldin ${kullanici}! Dünyamız için harekete geçme zamanı 🌍`;

// 🌙 KARANLIK MOD
function karanlikMod() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "tema",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}
if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark");
}

// 🔢 SAYAÇ (GARANTİLİ)
document.addEventListener("DOMContentLoaded", () => {
  let sayi = Number(localStorage.getItem("sayac")) || 0;
  sayi++;
  localStorage.setItem("sayac", sayi);
  document.getElementById("sayac").textContent = sayi;
});

// 💡 İPUCU
const ipuclari = [
  "Kısa mesafelerde yürü 🚶‍♂️",
  "Işıkları kapat 💡",
  "Bez çanta kullan 🛍️",
  "Suyu boşa harcama 🚰",
  "Fişleri çek 🔌"
];
document.getElementById("ipucu").textContent =
  ipuclari[Math.floor(Math.random() * ipuclari.length)];

// ⏳ GERİ SAYIM
let sure = 60;
const sayim = document.getElementById("sayim");

setInterval(() => {
  if (sure > 0) {
    sure--;
    sayim.textContent = sure;
  } else {
    sayim.textContent = "🎉 Görev tamamlandı!";
  }
}, 1000);

// 🤔 SEÇİM
function cevapVer() {
  const cevap = document.getElementById("cevap");
  cevap.textContent = "✅ Güzel seçim, farkındalık artıyor!";
  cevap.classList.remove("hidden");
}

// 🌍 KARBON HESABI
function karbonHesapla() {
  const araba = Number(document.getElementById("araba").value) || 0;
  const elektrik = Number(document.getElementById("elektrik").value) || 0;
  const ucak = Number(document.getElementById("ucak").value) || 0;

  const toplam = araba * 0.21 * 52 + elektrik * 0.42 * 12 + ucak * 250;

  document.getElementById("sonuc").textContent =
    `🌱 Yıllık karbon ayak izin: ${Math.round(toplam)} kg CO₂`;
  document.getElementById("sonuc").classList.remove("hidden");

  const agac = Math.ceil(toplam / 21);
  document.getElementById("agac").textContent =
    `🌳 Dengelemek için ${agac} ağaç gerekir.`;
  document.getElementById("agac").classList.remove("hidden");

  const rozet = document.getElementById("rozet");
  rozet.className = "rozet";

  if (toplam < 2000) {
    rozet.textContent = "🏆 ÇEVRE DOSTU 🌱";
    rozet.classList.add("yesil");
  } else if (toplam < 5000) {
    rozet.textContent = "⚠️ GELİŞTİRİLEBİLİR";
    rozet.classList.add("sari");
  } else {
    rozet.textContent = "❌ YÜKSEK KARBON AYAK İZİ";
    rozet.classList.add("kirmizi");
  }

  rozet.classList.remove("hidden");
  grafikCiz(araba, elektrik, ucak);
}

// 📊 GRAFİK
function grafikCiz(a, e, u) {
  const ctx = document.getElementById("grafik").getContext("2d");
  ctx.clearRect(0, 0, 300, 200);

  const v = [a, e, u];
  const t = ["Araba", "Elektrik", "Uçak"];
  const max = Math.max(...v);

  v.forEach((d, i) => {
    const h = (d / max) * 150;
    const x = 40 + i * 90;
    const y = 180 - h;

    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(x, y, 40, h);
    ctx.fillStyle = "white";
    ctx.fillText(t[i], x, 195);
  });
}

// 📍 SCROLL
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById("ilerleme").textContent =
    `📍 İlerleme: %${Math.round((window.scrollY / h) * 100)}`;
});
