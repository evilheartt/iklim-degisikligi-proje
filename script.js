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

  // Yaklaşık hesaplama (eğitim amaçlı)
  const toplam =
    (araba * 0.21 * 52) +      // araba (yıllık)
    (elektrik * 0.42 * 12) +   // elektrik (yıllık)
    (ucak * 250);              // uçak

  const sonuc = document.getElementById("sonuc");
  sonuc.textContent = `🌱 Tahmini yıllık karbon ayak izin: ${Math.round(toplam)} kg CO₂`;
  sonuc.classList.remove("hidden");
}
