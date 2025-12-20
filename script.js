let kullanici = localStorage.getItem("kullanici");

if (!kullanici) {
  kullanici = prompt("🌱 İsmini gir:");
  localStorage.setItem("kullanici", kullanici);
}

document.querySelector("header p").textContent =
  `Hoş geldin ${kullanici}! Dünyamız için harekete geçme zamanı 🌍`;
// ✅ MESAJ GÖSTER
function mesajGoster() {
  const mesaj = document.getElementById("mesaj");
  mesaj.textContent = "🌍 Tebrikler! Küçük adımlar büyük değişimler yaratır.";
  mesaj.classList.remove("hidden");
}

// 🌙 KARANLIK MOD (KALICI)
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

// 🔢 ZİYARETÇİ SAYAÇ
let sayi = Number(localStorage.getItem("sayac")) || 0;
sayi++;
localStorage.setItem("sayac", sayi);
document.getElementById("sayac").textContent = sayi;

// 🌍 KARBON AYAK İZİ HESAPLAMA
function karbonHesapla() {
  const araba = Number(document.getElementById("araba").value) || 0;
  const elektrik = Number(document.getElementById("elektrik").value) || 0;
  const ucak = Number(document.getElementById("ucak").value) || 0;

  const arabaCO2 = araba * 0.21 * 52;
  const elektrikCO2 = elektrik * 0.42 * 12;
  const ucakCO2 = ucak * 250;

  const toplam = arabaCO2 + elektrikCO2 + ucakCO2;

  // 📊 SONUÇ
  const sonuc = document.getElementById("sonuc");
  sonuc.textContent = `🌱 Yıllık karbon ayak izin: ${Math.round(toplam)} kg CO₂`;
  sonuc.classList.remove("hidden");

  // 🌳 AĞAÇ HESABI
  const agacSayisi = Math.ceil(toplam / 21);
  const agac = document.getElementById("agac");
  agac.textContent = `🌳 Dengelemek için yaklaşık ${agacSayisi} ağaç gerekir.`;
  agac.classList.remove("hidden");

  // 🏆 ROZET
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

  grafikCiz(arabaCO2, elektrikCO2, ucakCO2);
}

// 📊 GRAFİK
function grafikCiz(araba, elektrik, ucak) {
  const canvas = document.getElementById("grafik");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const veriler = [araba, elektrik, ucak];
  const etiketler = ["Araba", "Elektrik", "Uçak"];
  const maxDeger = Math.max(...veriler);

  veriler.forEach((deger, i) => {
    const barYukseklik = (deger / maxDeger) * 150;
    const x = 40 + i * 90;
    const y = 180 - barYukseklik;

    ctx.fillStyle = document.body.classList.contains("dark")
      ? "#81c784"
      : "#4CAF50";

    ctx.fillRect(x, y, 40, barYukseklik);

    // 📊 SAYI
    ctx.fillStyle = "white";
    ctx.fillText(Math.round(deger), x + 5, y - 5);
    ctx.fillText(etiketler[i], x, 195);
  });
}


// 💡 GÜNLÜK İPUCU
const ipuclari = [
  "Bugün kısa mesafelerde yürümeyi dene 🚶‍♂️",
  "Gereksiz ışıkları kapat 💡",
  "Bez çanta kullan 🛍️",
  "Musluğu açık bırakma 🚰",
  "Elektronik cihazları fişten çek 🔌"
];

document.getElementById("ipucu").innerText =
  ipuclari[Math.floor(Math.random() * ipuclari.length)];

// ⏳ GERİ SAYIM (60 sn)
let sure = 60;
const sayim = document.getElementById("sayim");

const zamanlayici = setInterval(() => {
  if (sure > 0) {
    sure--;
    sayim.textContent = sure;
  } else {
    clearInterval(zamanlayici);
    sayim.textContent = "🎉 Süre doldu!";
  }
}, 1000);

// 🤔 SEÇİM
function cevapVer() {
  const cevap = document.getElementById("cevap");
  cevap.textContent = "✅ Güzel seçim! Farkındalık artıyor.";
  cevap.classList.remove("hidden");
}

// 📍 SCROLL İLERLEME
window.addEventListener("scroll", () => {
  const toplam = document.documentElement.scrollHeight - window.innerHeight;
  const oran = Math.round((window.scrollY / toplam) * 100);
  document.getElementById("ilerleme").textContent = `📍 İlerleme: %${oran}`;
});

// 🎉 SAYFA İÇİ TEBRİK (alert YOK)
setTimeout(() => {
  const mesaj = document.getElementById("mesaj");
  mesaj.textContent = "🎉 30 saniyedir buradasın, harikasın! 🌱";
  mesaj.classList.remove("hidden");
}, 30000);
setInterval(() => {
  if (sure === 0) {
    alert("🎉 Günlük çevre görevini tamamladın!");
  }
}, 1000);
