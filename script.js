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
