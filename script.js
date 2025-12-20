function mesajGoster() {
  const mesaj = document.getElementById("mesaj");
  mesaj.textContent = "🌍 Tebrikler! Küçük adımlar büyük değişimler yaratır.";
  mesaj.classList.remove("hidden");
}

// 🌙 KARANLIK MOD
function karanlikMod() {
  document.body.classList.toggle("dark");
}

// 🔢 SAYAÇ
let sayi = localStorage.getItem("sayac") || 0;
sayi++;
localStorage.setItem("sayac", sayi);
document.getElementById("sayac").textContent = sayi;
function karbonHesapla() {
  const araba = Number(document.getElementById("araba").value) || 0;
  const elektrik = Number(document.getElementById("elektrik").value) || 0;
  const ucak = Number(document.getElementById("ucak").value) || 0;

  const arabaCO2 = araba * 0.21 * 52;
  const elektrikCO2 = elektrik * 0.42 * 12;
  const ucakCO2 = ucak * 250;

  const toplam = arabaCO2 + elektrikCO2 + ucakCO2;

  // Sonuç yazısı
  const sonuc = document.getElementById("sonuc");
  sonuc.textContent = `🌱 Yıllık karbon ayak izin: ${Math.round(toplam)} kg CO₂`;
  sonuc.classList.remove("hidden");

  // Ağaç hesabı
  const agacSayisi = Math.ceil(toplam / 22);
  const agac = document.getElementById("agac");
  agac.textContent = `🌳 Bu kadar karbonu dengelemek için ${agacSayisi} ağaç gerekir.`;
  agac.classList.remove("hidden");

  grafikCiz(arabaCO2, elektrikCO2, ucakCO2);
}
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

    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(x, y, 40, barYukseklik);

    ctx.fillStyle = "white";
    ctx.fillText(etiketler[i], x, 195);
  });
}
