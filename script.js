// ✅ MESAJ GÖSTER
function mesajGoster() {
  const mesaj = document.getElementById("mesaj");
  mesaj.textContent = "🌍 Tebrikler! Küçük adımlar büyük değişimler yaratır.";
  mesaj.classList.remove("hidden");
}

// 🌙 KARANLIK MOD (KALICI)
function karanlikMod() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }
}

if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark");
}

// 🔢 SAYAÇ
let sayi = localStorage.getItem("sayac") || 0;
sayi++;
localStorage.setItem("sayac", sayi);
document.getElementById("sayac").textContent = sayi;

// 🌍 KARBON HESAPLAMA
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
  agac.textContent = `🌳 Bu karbonu dengelemek için yaklaşık ${agacSayisi} ağaç gerekir.`;
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

  // 📈 GRAFİK
  grafikCiz(arabaCO2, elektrikCO2, ucakCO2);
}

// 📊 GRAFİK ÇİZİMİ
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
    ctx.fillStyle = "white";
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
